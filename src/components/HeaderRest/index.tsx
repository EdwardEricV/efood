import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { useGetRestauranteQuery } from '../../services/api'
import fundoImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'
import { Container } from '../../styles'
import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store/index'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

export default function HeaderPerfil({ tipo, titulo, capa }: Props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const abreCart = () => dispatch(open())
  const { items } = useSelector((state: RootReducer) => state.cart)

  const { data: restaurante } = useGetRestauranteQuery(id!)
  return (
    <>
      <S.Image style={{ backgroundImage: `url(${fundoImg})` }}>
        <div className="container">
          <S.Wrapper>
            <S.Text>Restaurantes</S.Text>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
            <S.Cart onClick={abreCart}>
              {items.length} produto(s) no carrinho
            </S.Cart>
          </S.Wrapper>
        </div>
      </S.Image>
      <S.Banner
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${restaurante?.capa})`
        }}
      >
        <Container>
          <S.TextBanner>{restaurante?.tipo}</S.TextBanner>
          <S.RestaurantName>{restaurante?.titulo}</S.RestaurantName>
        </Container>
      </S.Banner>
    </>
  )
}
