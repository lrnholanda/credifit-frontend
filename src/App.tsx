import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FuncionariosList from './components/Funcionario/FuncionariosList'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <div>
        <Navbar/>
        <FuncionariosList/>
      </div>
      
    </>
  )
}

export default App
