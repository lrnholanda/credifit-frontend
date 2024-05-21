import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 
import Notification from '../Nofication/Notification';

const SimuladorEmprestimo = ()  => {
const [valorEmprestimo, setValorEmprestimo] =  useState(2000);
const [notification, setNotification] = useState(null);

const handleSimularEmprestimo = async () => {
  const navigate = useNavigate();

  try {
  const response = await axios.post('http://localhost:3001/emprestimos', { valor: valorEmprestimo});
    console.log('Empréstimo solicitado com sucesso:', response.data);
    localStorage.setItem('valorEmprestimo', valorEmprestimo.toString());
    navigate('/escolher-parcelas');
  } catch {
    console.error('Erro ao solicitar empréstimo:', error);
  }
  setNotification({ message: 'Empréstimo simulado com sucesso!', type: 'success' });
};
return (
  <div className="max-w-md mx-auto mt-8"> 
    <div className="bg-white rounded-md shadow-md overflow-hidden  p-4">
    <h1 className="text-sm font-semibold text-darkgreen text-left">Simular Empréstimo</h1>
    <div className="bg-lightorange rounded-md  p-4 m-4 flex items-center">
        <img className="h-30 w-30 mr-3" src="src/assets/betina-sorrindo_2x 1.svg" alt="betina"/>
          <h2 className="text-sm font-light text-gray-800 text-center">
            Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação!
          </h2>
        </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm mb-2">Digite quanto você precisa:</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600 text-sm">R$ 500</span>
              <span className="text-gray-600 text-sm">R$ 15.000</span>
            </div>
            <Slider
              min={500}
              max={15000}
              step={500}
              value={valorEmprestimo}
              onChange={setValorEmprestimo}
              className="mt-4"
            />
            <span className="text-sm text-gray-600">Valor selecionado: R$ {valorEmprestimo}</span>
          </div>
          <button
            onClick={handleSimularEmprestimo}
            className="w-full bg-darkgreen text-white py-2 rounded-md hover:bg-lightgreen">
            Simular Empréstimo
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
);
  
}

export default SimuladorEmprestimo;