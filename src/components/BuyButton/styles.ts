import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.brancaFundo};
  padding: 4px 6px;
  background-color: ${cores.salmao};
  border: none;
`

export const BotaoLink = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.salmao};
  padding: 4px;
  background-color: ${cores.salmaoClaro};
  border: none;
  text-decoration: none;
  width: 100%;
  display: block;
  margin: 0 auto;
  text-align: center;
`
