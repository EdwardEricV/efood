import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/List'
export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  quantidade: number
}
export type Restaurants = {
  foto: string
  infos: string[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
      <Footer />
    </>
  )
}
export default Home
