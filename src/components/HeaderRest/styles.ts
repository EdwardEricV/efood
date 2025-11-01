import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.pink};
`

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
`

export const TextBanner = styled.p`
  padding-top: 25px;
  font-size: 32px;
  font-weight: 100;
  padding-bottom: 152px;
`

export const RestaurantName = styled.p`
  font-size: 32px;
  font-weight: 900;
  width: 672px;
`
export const Cart = styled.h3`
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.pink};
  &:hover {
    text-decoration: underline;
  }
`
