export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: { preco: number }[]) => {
  return items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.preco,
    0
  )
}
