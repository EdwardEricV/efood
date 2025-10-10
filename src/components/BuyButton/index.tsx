import { Botao, BotaoLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const BuyButton = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <Botao type="button" title={title} onClick={onClick}>
        {children}
      </Botao>
    )
  }

  return (
    <BotaoLink to={to as string} title={title}>
      {children}
    </BotaoLink>
  )
}
export default BuyButton
