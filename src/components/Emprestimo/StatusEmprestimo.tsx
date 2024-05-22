import React, { useEffect, useState } from 'react';
import Notification from '../Nofication/Notification';

const StatusEmprestimo = () => {
  const [respostaAPI, setRespostaAPI] = useState<any>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const respostaArmazenada = localStorage.getItem('respostaAPI');
    if (respostaArmazenada) {
      setRespostaAPI(JSON.parse(respostaArmazenada));
    } else {
      setNotification({ message: 'Nenhuma resposta de empréstimo encontrada.', type: 'error' });
    }
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white rounded-md shadow-md overflow-hidden p-6">
        <h1 className="text-lg font-semibold text-darkgreen mb-4">Empréstimo Recorrente</h1>
        <div className="p-4">
          {respostaAPI ? (
            <>
              <p className="text-sm text-gray-700 mb-2 p-3 bg-greenstatus rounded-3xl">{respostaAPI.status ? 'Confirmado' : 'Negado'}</p>
              <p className="text-sm text-gray-700 mb-2">Valor: R$ {respostaAPI.valor}</p>
              <p className="text-sm text-gray-700 mb-2">Parcelas: {respostaAPI.parcelas}</p>
            </>
          ) : (
            <p className="text-sm text-gray-700">Nenhuma resposta de empréstimo encontrada.</p>
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

export default StatusEmprestimo;

