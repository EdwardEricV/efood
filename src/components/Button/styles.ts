import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`

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
  color: ${cores.brancaFundo};
  padding: 4px 6px;
  background-color: ${cores.salmao};
  border: none;
  text-decoration: none;
`
