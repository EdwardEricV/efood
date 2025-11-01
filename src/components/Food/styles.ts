import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerFood = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${colors.pink};
  cursor: pointer;
  height: 338px;
  padding: 8px;
`

export const ImagemFood = styled.img`
  display: block;
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const TitleFood = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const DescriptionFood = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`
export const StyledButton = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${colors.offWhite};
  color: ${colors.pink};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
`
