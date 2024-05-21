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
return {
  <div> 
  </div>
  }
  
}

export default SimuladorEmprestimo;