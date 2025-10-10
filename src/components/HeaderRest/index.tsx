import { Link } from 'react-router-dom'
import { ImagemHeader, Subtitulo, LogoEFOOD, Teste } from './styles'

import logo from '../../assets/images/logo.svg'
import HeaderImg from '../../assets/images/Vector.png'

const HeaderRest = () => (
  <>
    <ImagemHeader style={{ backgroundImage: `url(${HeaderImg})` }}>
      <Teste>
        <Subtitulo>Restaurantes</Subtitulo>
        <Link to="/">
          <LogoEFOOD src={logo} alt="EFOOD" />
        </Link>
        <Subtitulo>0 produto(s) no carrinho</Subtitulo>
      </Teste>
    </ImagemHeader>
  </>
)

export default HeaderRest
