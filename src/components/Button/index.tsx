import { Buttons } from './styles'

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => <Buttons>{children}</Buttons>

export default Button
