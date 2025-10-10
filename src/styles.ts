import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  brancaFundo: '#fff8f2',
  cardFundo: '#ffffff',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  salmao: '#e66767',
  salmaoClaro: '#ffebd9',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
