import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>( 
  {} as TransactionsContextData
  );

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(resposta => setTransactions(resposta.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const resposta = await api.post('/transactions', {
      ...transactionInput, 
      createdAt: new Date()
    })
    
    const { transaction } = resposta.data

    setTransactions([...transactions, transaction])

  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}
