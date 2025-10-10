import Tag from '../Tag'

import BuyButton from '../BuyButton'
import {
  Card,
  Titulo,
  Descricao,
  Infos,
  Espacamento,
  Botao,
  AvaliacaoEstrela,
  Avaliacao,
  Imagem
} from './styles'

type Props = {
  title: string
  category: string
  system: string[]
  description: string
  infos: string[]
  image: string
}

const Food = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Espacamento>
      <AvaliacaoEstrela>
        <Titulo>{title}</Titulo>
        <Avaliacao>
          <Titulo>{category}</Titulo>
        </Avaliacao>
      </AvaliacaoEstrela>
      <Descricao>{description}</Descricao>
      <BuyButton
        type="link"
        to="/Produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Adicionar ao carrinho
      </BuyButton>
    </Espacamento>
  </Card>
)

export default Food
