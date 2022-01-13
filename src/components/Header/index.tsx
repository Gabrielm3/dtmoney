import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onAbrirNovaTransacaoModal: () => void;
}

export function Header({onAbrirNovaTransacaoModal}: HeaderProps){
 
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onAbrirNovaTransacaoModal}>
          Nova Transação
        </button>
        
      </Content>
    </Container>
  )
}