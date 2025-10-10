import ProductsList from '../../components/ProductList/Index'
import Game from '../../models/Game'
import sushi from '../../assets/images/sushi.png'
import italiana from '../../assets/images/italiana.png'
import estrela from '../../assets/images/estrela.png'
import Header from '../../components/Header'

const promocoes: Game[] = [
  {
    id: 1,
    category: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    system: ['4.9', estrela]
  },
  {
    id: 2,
    category: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    system: ['4.9', estrela]
  },
  {
    id: 3,
    category: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    system: ['4.9', estrela]
  },
  {
    id: 4,
    category: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    system: ['4.9', estrela]
  },
  {
    id: 5,
    category: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    system: ['4.9', estrela]
  },
  {
    id: 6,
    category: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    system: ['4.9', '4.9']
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
  </>
)

export default Home
