import { Imagem, Precos, Subtitulo, Teste } from './styles'

import BannerImg from '../../assets/images/imagem_fundo.png'
import Tag from '../Tag'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <Teste>
      <Subtitulo>Italiana</Subtitulo>
      <Precos>La Dolce Vita Trattoria</Precos>
    </Teste>
  </Imagem>
)

export default Banner
