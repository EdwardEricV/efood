import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'

import close from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  photo: string
  name: string
  description: string
  portion: string
  price: number
  id: number
  isOpen: boolean
  onClose: () => void
}

const ItemCart = ({
  photo,
  name,
  description,
  portion,
  price,
  id,
  isOpen,
  onClose
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        foto: photo,
        nome: name,
        descricao: description,
        porcao: portion,
        preco: price,
        id,
        quantidade: 1
      })
    )
    dispatch(open())
    onClose()
  }

  const getDescription = (description: string) => {
    if (description.length > 90) {
      return description.slice(0, 87) + '...'
    }
    return description
  }

  return (
    <S.ModalContainer className={isOpen ? 'is-visible' : ''}>
      <S.ModalContent className="container">
        <img src={close} alt="Fechar" onClick={onClose} />
        <header>
          <img src={photo} alt={name} />
        </header>
        <div>
          <h4>{name}</h4>
          <p>{getDescription(description)}</p>
          <p>Serve: de {portion}</p>
          <S.Button onClick={addToCart}>
            Adicionar ao carrinho - {parseToBrl(price)}
          </S.Button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.ModalContainer>
  )
}

export default ItemCart
