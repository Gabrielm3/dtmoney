import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable(){
  useEffect(() => {
    api.get('transactions')
    .then(resposta => console.log(resposta.data))
  }, [])



  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="entrada">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>21/21/2045</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="saida">-R$1200,00</td>
            <td>Aluguel</td>
            <td>21/21/2045</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}