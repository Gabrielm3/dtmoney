import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root')

export function App() {
  const [isNovaTransacaoModalAberto, setIsNovaTransacaoModalAberto] = useState(false)

  function handleAbrirNovaTransacaoModal(){
    setIsNovaTransacaoModalAberto(true)
  }

  function handleFecharNovaTransacaoModal(){
    setIsNovaTransacaoModalAberto(false)
  }

  return (
    <>
      <Header onAbrirNovaTransacaoModal={handleAbrirNovaTransacaoModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNovaTransacaoModalAberto}
        onRequestClose={handleFecharNovaTransacaoModal}
      />

      <GlobalStyle />
    </>
  );
}