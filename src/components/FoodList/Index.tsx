import Game from '../../models/Game'
import Food from '../Food'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const FoodList = ({ background, title, games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Food
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
