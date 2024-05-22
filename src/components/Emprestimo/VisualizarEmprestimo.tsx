import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from '../Nofication/Notification';

const VisualizarEmprestimo = () => {
  const [valorEmprestimo, setValorEmprestimo] = useState<number | null>(null);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState<number | null>(null);
  const [idFuncionario, setIdFuncionario] = useState<number | null>(null);
  const [respostaAPI, setRespostaAPI] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const valorSalvo = localStorage.getItem('valorEmprestimo');
    const parcelasSalvas = localStorage.getItem('numeroParcelas');
    const idFuncionarioSalvo = localStorage.getItem('funcionarioId');
    if (valorSalvo && parcelasSalvas && idFuncionarioSalvo) {
      setValorEmprestimo(parseFloat(valorSalvo));
      setQuantidadeParcelas(parseInt(parcelasSalvas));
      setIdFuncionario(parseInt(idFuncionarioSalvo));
    }
  }, []);

  const confirmarEmprestimo = async () => {
    try {
      if (valorEmprestimo === null || quantidadeParcelas === null || idFuncionario === null) {
        throw new Error('Dados de empréstimo incompletos');
      }

      const response = await axios.post('http://localhost:3001/emprestimos', {
        valor: valorEmprestimo,
        parcelas: quantidadeParcelas,
        funcionarioId: idFuncionario
      });

      // Armazenar a resposta da API no localStorage
      localStorage.setItem('respostaAPI', JSON.stringify(response.data));

      // Limpar localStorage dos dados de empréstimo
      localStorage.removeItem('valorEmprestimo');
      localStorage.removeItem('numeroParcelas');
      localStorage.removeItem('funcionarioId');

      setNotification({ message: 'Empréstimo confirmado com sucesso!', type: 'success' });
      navigate('/resultado-emprestimo');
    } catch (error) {
      console.error('Erro ao confirmar empréstimo:', error);
      setNotification({ message: 'Erro ao confirmar empréstimo', type: 'error' });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden p-4">
        <h1 className="text-sm font-semibold text-darkgreen text-left">Visualização de Empréstimo</h1>
        <div className="p-6">
          <p className="text-sm font-light text-gray-800">Valor do Empréstimo: R$ {valorEmprestimo}</p>
          <p className="text-sm font-light text-gray-800">Quantidade de Parcelas: {quantidadeParcelas}</p>
          <button
            onClick={confirmarEmprestimo}
            className="w-full bg-darkgreen text-white py-2 rounded-md hover:bg-lightgreen mt-4"
          >
            Confirmar Empréstimo
          </button>
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualizarEmprestimo;
