import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Funcionario {
  id: number;
  nomeCompleto: string;
  cpf: string;
  // Adicione outros campos conforme necessário
}

const FuncionariosList = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await axios.get('http://localhost:3001/funcionarios');
        console.log('Dados recebidos:', response.data);
        setFuncionarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };

    fetchFuncionarios();
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>
            {funcionario.nomeCompleto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FuncionariosList;

