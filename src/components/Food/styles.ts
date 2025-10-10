import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  position: relative;
  border: 1px solid;

  ${TagContainer} {
    margin-right: 16px;
`

export const AvaliacaoEstrela = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Imagem = styled.img`
  width: 100%;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
`

export const Avaliacao = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: block;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.brancaFundo};
  padding: 4px 6px;
  background-color: ${cores.salmao};
  border: none;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Espacamento = styled.div`
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0px;
`
