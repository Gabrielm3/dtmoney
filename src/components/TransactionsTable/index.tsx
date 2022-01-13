import { Container } from './styles'

export function TransactionsTable(){
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
            <td>R$12000,00</td>
            <td>categoria</td>
            <td>21/21/2045</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}