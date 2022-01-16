import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import fecharModal from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose }:NewTransactionModalProps){
  const { createTransaction } = useContext(TransactionsContext)
 
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposito')

  function handleCriarNovaTransacao(event: FormEvent){
    event.preventDefault();

    createTransaction({
      title, 
      amount,
      category,
      type
    })
  }
  
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={fecharModal} alt="fechar modal"/>
      </button>

    <Container onSubmit={handleCriarNovaTransacao}>
     <h2>Cadastrar transação</h2>
      <input 
        placeholder="Titulo"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input 
        type="number" 
        placeholder="Valor"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
      />
      
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => { setType('deposito')}}
          isActive={type === 'deposito'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entrada"/>
          <span>Entrada</span>
        </RadioBox>
        
        <RadioBox
          type="button"
          onClick={() => { setType('saida')}}
          isActive={type === 'saida'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Saida"/>
          <span>Saida</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input 
        type="text" 
        placeholder="Categoria" 
        value={category}
        onChange={event => setCategory(event.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </Container> 
    </Modal>
  )
}