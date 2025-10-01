import { Link } from 'react-router-dom'
import { ImagemHeader, Subtitulo, LogoEFOOD } from './styles'

import logo from '../../assets/images/logo.svg'
import HeaderImg from '../../assets/images/Vector.png'

const Header = () => (
  <>
    <ImagemHeader style={{ backgroundImage: `url(${HeaderImg})` }}>
      <Link to="/">
        <LogoEFOOD src={logo} alt="EFOOD" />
      </Link>
      <Subtitulo>
        Viva experiências gastronômicas no conforto da sua casa
      </Subtitulo>
    </ImagemHeader>
  </>
)

export default Header
