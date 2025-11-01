declare type Checkout = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      descricao: string
      city: string
      zipcode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type Cardapio = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapios: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

declare type CardapioIten = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
