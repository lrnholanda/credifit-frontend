import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
  </div>
);
  
}

export default SimuladorEmprestimo;