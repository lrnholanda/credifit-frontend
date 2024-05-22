// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroFuncionario from '../components/Funcionario/CadastroFuncionario';
import SimulacaoEmprestimo from '../components/Emprestimo/SimulacaoEmprestimo';
import Parcelamento from '../components/Parcelas/Parcelamento';
import VisualizarEmprestimo from '../components/Emprestimo/VisualizarEmprestimo';
import StatusEmprestimo from '../components/Emprestimo/StatusEmprestimo';



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroFuncionario />} />
        <Route path="/solicitar-emprestimo" element={<SimulacaoEmprestimo />} />
        <Route path="/parcelamento" element={<Parcelamento/>} />
        <Route path="/confirmar-emprestimo" element={<VisualizarEmprestimo/>} />
        <Route path="/resultado-emprestimo" element={<StatusEmprestimo/>} />
     
      </Routes>
    </Router>
  );
};

export default AppRoutes;
