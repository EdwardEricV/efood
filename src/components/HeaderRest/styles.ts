import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemHeader = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 32px;
`
export const LogoEFOOD = styled.img`
  max-width: 100%;
  height: auto;
`

export const Subtitulo = styled.h2`
  font-weight: 900;
  font-size: 18px;
`

export const Teste = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;

  h2:first-child {
    justify-self: start;
  }

  h2:last-child {
    justify-self: end;
  }
`
