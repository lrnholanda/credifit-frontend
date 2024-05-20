import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notification from '../Nofication/Notification';

type Empresa = {
  id: number;
  razaoSocial: string;
};

const CadastroFuncionario = () => {
  const [funcionarioData, setFuncionarioData] = useState({
    nomeCompleto: '',
    cpf: '',
    email: '',
    senha: '',
    salario: '',
    empresaId: '',
  });

  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get<Empresa[]>('http://localhost:3001/empresas');
        setEmpresas(response.data);
      } catch (error) {
        console.error('Erro ao buscar empresas:', error);
      }
    };
    fetchEmpresas();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFuncionarioData({
      ...funcionarioData,
      [name]: value,
    });
  };

  const handleEmpresaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFuncionarioData({
      ...funcionarioData,
      empresaId: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificando se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(funcionarioData.email)) {
      setNotification({ message: 'Por favor, insira um email válido', type: 'error' });
      return;
    }

    // Verificando se o salário é um número válido
    const salario = parseFloat(funcionarioData.salario);
    if (isNaN(salario)) {
      setNotification({ message: 'Por favor, insira um salário válido', type: 'error' });
      return;
    }

    // Verificando se a empresaId é um número válido
    const empresaId = parseInt(funcionarioData.empresaId);
    if (isNaN(empresaId)) {
      setNotification({ message: 'Por favor, selecione uma empresa válida', type: 'error' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/funcionarios', {
        nomeCompleto: funcionarioData.nomeCompleto,
        cpf: funcionarioData.cpf,
        email: funcionarioData.email,
        senha: funcionarioData.senha,
        salario: salario, // Convertendo para número
        empresaId: empresaId, // Convertendo para número
      });
      setNotification({ message: 'Funcionário cadastrado com sucesso!', type: 'success' });
      setFuncionarioData({
        nomeCompleto: '',
        cpf: '',
        email: '',
        senha: '',
        salario: '',
        empresaId: '',
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setNotification({ message: `Erro ao cadastrar funcionário: ${error.response.data}`, type: 'error' });
      } else {
        setNotification({ message: 'Erro ao cadastrar funcionário', type: 'error' });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nomeCompleto" className="block mb-1">Nome Completo:</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" value={funcionarioData.nomeCompleto} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4" />
        </div>
        <div>
          <label htmlFor="cpf" className="block mb-1">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={funcionarioData.cpf} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" value={funcionarioData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4" />
        </div>
        <div>
          <label htmlFor="senha" className="block mb-1">Senha:</label>
          <input type="password" id="senha" name="senha" value={funcionarioData.senha} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4" />
        </div>
        <div>
          <label htmlFor="salario" className="block mb-1">Salário:</label>
          <input 
            type="text" 
            id="salario" 
            name="salario" 
            value={funcionarioData.salario} 
            onChange={handleChange} 
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4"
          />
        </div>
        <div>
          <label htmlFor="empresaId" className="block mb-1">Empresa:</label>
          <select id="empresaId" name="empresaId" value={funcionarioData.empresaId} onChange={handleEmpresaChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none py-2 px-4">
            <option value="">Selecione uma empresa</option>
            {empresas.map(empresa => (
              <option key={empresa.id} value={empresa.id}>{empresa.razaoSocial}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Cadastrar</button>
      </form>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default CadastroFuncionario;
