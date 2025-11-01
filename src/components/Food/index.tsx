import { useState } from 'react'
import ItemCart from '../ItemCart'

import * as S from './styles'

type FoodProps = {
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
  id: number
}

export default function Food({
  foto,
  descricao,
  nome,
  preco,
  porcao,
  id
}: FoodProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const limitarDescricao = (descricao: string) => {
    return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
  }

  return (
    <S.ContainerFood>
      <S.ImagemFood src={foto} />
      <div>
        <S.TitleFood>{nome}</S.TitleFood>
        <S.DescriptionFood>{limitarDescricao(descricao)}</S.DescriptionFood>
        <S.StyledButton onClick={() => setModalIsOpen(true)}>
          Adicionar ao carrinho{' '}
        </S.StyledButton>
      </div>
      {modalIsOpen && (
        <ItemCart
          photo={foto}
          name={nome}
          description={descricao}
          portion={porcao}
          price={preco}
          id={id}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </S.ContainerFood>
  )
}
