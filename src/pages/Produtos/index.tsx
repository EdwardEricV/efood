import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderRest'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import type { CardapioItem, Restaurants } from '../../pages/Home'
import FoodList from '../../components/FoodList/Index'

const Perfil = () => {
  const [restaurante, setRestaurante] = useState<Restaurants | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const cardapioCorrigido: CardapioItem[] = res.cardapio.map(
          (item: any) => ({
            ...item,
            preco: Number(item.preco)
          })
        )
        setRestaurante({
          ...res,
          cardapio: cardapioCorrigido
        } as Restaurants)
      })
  }, [id])

  return (
    <>
      {restaurante && (
        <HeaderPerfil
          tipo={restaurante.tipo!}
          titulo={restaurante.titulo!}
          capa={restaurante.capa!}
        />
      )}
      <FoodList />
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
