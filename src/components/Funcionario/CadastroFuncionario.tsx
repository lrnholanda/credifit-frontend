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
}