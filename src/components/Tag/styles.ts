import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.offWhite};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  margin-left: 8px;
`
