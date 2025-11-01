import { Link } from 'react-router-dom'

import * as S from './styles'
import favoriteStar from '../../assets/images/favoriteStar.png'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  image: string
  description: string
  classification: string
  infos: TagInfo[]
}
export type TagInfo = {
  text: string
  size: 'big' | 'small'
}

const Restaurant = ({
  description,
  image,
  title,
  classification,
  infos,
  id
}: Props) => (
  <S.ContainerRest>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag size={info.size} key={info.text}>
          {info.text}
        </Tag>
      ))}
    </S.Infos>
    <div>
      <h3>{title}</h3>
      <span>
        {classification}
        <img src={favoriteStar} alt="Classificação" />
      </span>
    </div>
    <S.Description>{description}</S.Description>
    <Link to={`/cart/${id}`}>
      <S.StyledButton type="button">Saiba mais</S.StyledButton>
    </Link>
  </S.ContainerRest>
)

export default Restaurant
