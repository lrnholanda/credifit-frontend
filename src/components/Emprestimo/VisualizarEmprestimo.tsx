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
    const idFuncionarioSalvo = localStorage.getItem('idFuncionario');
    if (valorSalvo && parcelasSalvas && idFuncionarioSalvo) {
      setValorEmprestimo(parseFloat(valorSalvo));
      setQuantidadeParcelas(parseInt(parcelasSalvas));
      setIdFuncionario(parseInt(idFuncionarioSalvo));
    }
  }, []);

  const confirmarEmprestimo = async () => {
    try {
      // Verifica se todos os dados necessários estão presentes
      if (valorEmprestimo === null || quantidadeParcelas === null || idFuncionario === null) {
        throw new Error('Dados de empréstimo incompletos');
      }

      // Envia os dados para a API
      const response = await axios.post('http://localhost:3001/emprestimos', {
        valor: valorEmprestimo,
        parcelas: quantidadeParcelas,
        funcionarioId: idFuncionario
      });

      // Armazena a resposta da API no estado para exibir os detalhes do empréstimo ao usuário
      setRespostaAPI(response.data);

      localStorage.removeItem('valorEmprestimo');
      localStorage.removeItem('numeroParcelas');
      localStorage.removeItem('idFuncionario');

      setNotification({ message: 'Empréstimo confirmado com sucesso!', type: 'success' });
      navigate('/proximo-passs');
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
          {respostaAPI && (
            <div className="mt-4">
              <h2 className="text-sm font-semibold text-darkgreen">Detalhes do Empréstimo:</h2>
              <p className="text-sm font-light text-gray-800">Status: {respostaAPI.status}</p>
              <p className="text-sm font-light text-gray-800">Data: {respostaAPI.data}</p>
            </div>
          )}
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
