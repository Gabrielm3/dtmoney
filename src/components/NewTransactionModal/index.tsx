import { useState } from 'react'
import Modal from 'react-modal'
import fecharModal from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose }:NewTransactionModalProps){
  const [type, setType] = useState('deposito')
  
  return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={fecharModal} alt="fechar modal"/>
      </button>

    <Container>
     <h2>Cadastrar transação</h2>
      <input type="text" placeholder="Tipo"></input>
      <input type="number" placeholder="Valor"></input>
      
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => { setType('deposito')}}
          isActive={type === 'deposito'}
        >
          <img src={incomeImg} alt="Entrada"/>
          <span>Entrada</span>
        </RadioBox>
        
        <RadioBox
          type="button"
          onClick={() => { setType('saida')}}
          isActive={type === 'saida'}
        >
          <img src={outcomeImg} alt="Saida"/>
          <span>Saida</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input type="text" placeholder="Categoria"></input>
      <button type="submit">Cadastrar</button>
    </Container> 
    </Modal>
  )
}