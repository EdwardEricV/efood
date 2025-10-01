import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.salmaoClaro};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListLogos = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 32px;
  gap: 16px;
`
export const LogoEFOOD = styled.img`
  max-width: 100%;
  height: auto;
  padding-top: 40px;
`

export const TextFooter = styled.p`
  font-size: 10px;
  width: 480px;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;
`
