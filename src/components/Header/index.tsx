import { Link } from 'react-router-dom'
import * as S from './styles'
import fundoHeader from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${fundoHeader})` }}>
      <S.Logo>
        <Link to={'/'}>
          <img src={logo} alt="Logo da Efood" />
        </Link>
      </S.Logo>
      <S.TextHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </S.TextHeader>
    </S.HeaderContainer>
  )
}
