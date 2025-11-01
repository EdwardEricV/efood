import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import Checkout from '../Checkout'
import type { RootReducer } from '../../store'
import lixeira from '../../assets/images/trash.png'
import { close, openOrder, remove } from '../../store/reducers/cart'
import { parseToBrl, getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items, isOrder } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => dispatch(remove(id))

  const openRequest = () => {
    if (items.length > 0) {
      dispatch(openOrder())
    } else {
      closeCart()
      alert('Seu carrinho está vazio')
    }
  }

  if (isOrder) {
    return <Checkout />
  }

  if (!isOpen) {
    return null
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img className="product-image" src={item.foto} alt={item.nome} />
              <div>
                <S.Title>{item.nome}</S.Title>
                <span>{parseToBrl(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)}>
                <S.Trash src={lixeira} alt="Remover item do carrinho" />
              </button>
              {item.quantidade > 1 && (
                <S.Quantity>{item.quantidade}x</S.Quantity>
              )}
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total:</p>
          <p>{parseToBrl(getTotalPrice(items))}</p>
        </S.Prices>
        <S.ButtonCart onClick={openRequest}>
          Continuar com a entrega
        </S.ButtonCart>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
