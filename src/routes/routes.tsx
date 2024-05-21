// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroFuncionario from '../components/Funcionario/CadastroFuncionario';
import SolicitaoEmprestimo from '../components/Emprestimo/SimulacaoEmprestimo';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroFuncionario />} />
        <Route path="/solicitar-emprestimo" element={<SolicitaoEmprestimo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
