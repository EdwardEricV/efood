import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  background-position: center top;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Teste = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const Subtitulo = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.cardFundo};
  margin-bottom: 156px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
  color: ${cores.cardFundo};

  span {
    text-decoration: line-through;
  }
`
