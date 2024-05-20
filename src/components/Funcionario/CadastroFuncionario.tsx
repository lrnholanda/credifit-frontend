import React, {useState} from 'react';
import axios from 'axios';

const CadastroFuncionario = () => {
    const [funcionarioData, setFuncionarioData] = useState({
      nomeCompleto: '',
      cpf: '',
      email: '',
      senha: '',
      salario: '',
      empresaId: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFuncionarioData({
            ...funcionarioData,
            [name]: value,
        });
  }
  const h
}