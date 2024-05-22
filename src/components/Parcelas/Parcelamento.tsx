import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../Nofication/Notification';

const Parcelamento = () => {
  const [valorEmprestimo, setValorEmprestimo] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const valorSalvo = localStorage.getItem('valorEmprestimo');
    if (valorSalvo) {
      setValorEmprestimo(parseFloat(valorSalvo));
    }
  }, []);

  const calcularParcelas = (numeroParcelas: number): number => {
    return valorEmprestimo ? valorEmprestimo / numeroParcelas : 0;
  };

  const handleEscolherParcelas = (numeroParcelas: number) => {
    try {
      localStorage.setItem('numeroParcelas', numeroParcelas.toString());
      navigate('/confirmar-emprestimo');
    } catch (error) {
      console.error('Erro ao escolher parcelas:', error);
      setNotification({ message: 'Erro ao escolher parcelas', type: 'error' });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden p-4">
      <div className="bg-lightorange rounded-md p-4 m-4 flex items-center">
          <img className="h-30 w-30 mr-3" src="src/assets/betina-sorrindo_2x 1.svg" alt="betina" />
          <h2 className="text-sm font-light text-gray-800 text-center">
            Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação!
          </h2>
        </div>
        <h1 className="text-sm font-semibold text-darkgreen text-left">Escolha o número de parcelas</h1>
        <div className="p-6 flex flex-wrap justify-around">
          {[1, 2, 3, 4].map((numParcelas) => (
            <div key={numParcelas} className="w-1/4 bg-lightorange rounded-md p-4 m-4 flex flex-col items-center">
              <h2 className="text-sm font-light text-gray-800 text-center">{numParcelas}x Parcelas</h2>
              <p className="text-darkgreen font-semibold text-lg mt-2">R$ {calcularParcelas(numParcelas)}</p>
              <button
                onClick={() => handleEscolherParcelas(numParcelas)}
                className="w-full bg-darkgreen text-white py-2 rounded-md hover:bg-lightgreen mt-4"
              >
                Escolher
              </button>
            </div>
          ))}
        </div>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Parcelamento;
