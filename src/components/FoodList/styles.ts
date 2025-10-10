import styled from 'styled-components'

import { Props } from './Index'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  background-color: ${cores.brancaFundo};
  color: ${cores.salmaoClaro};
  padding: 56px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 118px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
