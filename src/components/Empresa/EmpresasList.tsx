import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Empresa{
  id: number;
  razaoSocial: string;
  cnpj: string;
}
// teste verificar se api está funcionado  renderizar lista de empresas 
const EmpresasList = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/empresas');
        console.log('Dados recebidos:', response.data);
        setEmpresas(response.data);
      } catch (error) {
        console.error('Erro ao buscar empresas', error);
      }
    };

    fetchEmpresas();
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.id}>
            {empresa.razaoSocial}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default EmpresasList;
