import styled from 'styled-components'
import { colors } from '../../styles'

type LabelProps = {
  width?: string
}

export const OrderContainer = styled.div`
  background-color: ${colors.pink};
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  padding: 8px 16px 8px 8px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    width: 70%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
export const OrderTitle = styled.h2`
  color: ${colors.lightGray};
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`
export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.offWhite};
  column-gap: 34px;
`
export const LabelContainer = styled.div<LabelProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};
  gap: 8px;
  margin-bottom: 8px;
  position: relative;

  label {
    font-size: 14px;
  }

  input {
    font-size: 14px;
    color: #4b4b4b;
    font-weight: bold;
    padding-block: 4px;
    padding-left: 4px;
    width: 100%;
    background-color: ${colors.offWhite};
    border: 2px solid ${colors.offWhite};
    height: 32px;

    &.error {
      border: 2px solid ${colors.orange};
      border-radius: 4px;
    }
  }
`
export const ErrorMessage = styled.small`
  background-color: ${colors.orange};
  color: ${colors.lightGray};
  font-size: 10px;
  position: absolute;
  top: 18px;
  left: 15px;
  border-radius: 4px;
  padding: 3px;
`
export const OrderButton = styled.button`
  background-color: ${colors.offWhite};
  color: ${colors.pink};
  text-align: center;
  cursor: pointer;
  border: none;
  font-size: 14px;
  text-decoration: none;
  width: 100%;
  height: 24px;
  border: 8px;
  font-weight: 700;
  margin-bottom: 8px;

  &.marginTop {
    margin-top: 32px;
  }
`
export const OrderDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.offWhite};
  margin-bottom: 16px;
`
