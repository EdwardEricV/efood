import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  height: 380px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 300px;
  }
`
export const Logo = styled.div`
  text-align: center;
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`
export const TextHeader = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: ${colors.pink};
  margin-top: 138px;
  text-align: center;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  word-break: keep-all;
`
