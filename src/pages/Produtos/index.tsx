import ProductsList from '../../components/ProductList/Index'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import pizza from '../../assets/images/pizza.png'
import estrela from '../../assets/images/estrela.png'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList/Index'
import HeaderRest from '../../components/HeaderRest'

// Promoções

const promocoes: Game[] = [
  {
    id: 1,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  },
  {
    id: 2,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  },
  {
    id: 3,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  },
  {
    id: 4,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  },
  {
    id: 5,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  },
  {
    id: 6,
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    infos: [],
    system: []
  }
]

const Produtos = () => (
  <>
    <HeaderRest />
    <Banner />
    <FoodList games={promocoes} title="RPG" background="gray" />
  </>
)

export default Produtos
