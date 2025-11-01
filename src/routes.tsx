import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
