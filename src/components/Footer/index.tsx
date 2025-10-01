import { Container, ListLogos, TextFooter, LogoEFOOD } from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <LogoEFOOD src={logo} alt="EFOOD" />
    <ListLogos>
      <li>
        <img src={instagram} alt="instagram" />
      </li>
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={twitter} alt="twitter" />
      </li>
    </ListLogos>
    <TextFooter>
      {' '}
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </TextFooter>
  </Container>
)

export default Footer
