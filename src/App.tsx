import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FuncionariosList from './components/Funcionario/FuncionariosList'
import Navbar from './components/Navbar/Navbar'
import CadastroFuncionario from './components/Funcionario/CadastroFuncionario'
import EmpresasList from './components/Empresa/EmpresasList'

function App() {


  return (
    <>
      <div>
        <Navbar/>
       <CadastroFuncionario/>
       <EmpresasList/>
      </div>
      
    </>
  )
}

export default App
