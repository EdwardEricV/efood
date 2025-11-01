import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.ContainerFooter>
    <S.Logo src={logo} alt="Efood" />
    <S.ListLogos>
      <li>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li id="twitter">
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
    </S.ListLogos>
    <S.TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.TextFooter>
  </S.ContainerFooter>
)

export default Footer
