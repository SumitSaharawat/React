import { useState } from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import TransactionDetails from './components/TransactionDetails'
import SearchTransaction from './components/SearchTransaction';

function App() {

  const [transaction, setTransaction] = useState([]);

  return (
    <>
      <h1>Expense-Tracker</h1>
      < AddTransaction
        transaction={transaction}
        setTransaction={setTransaction}/>
        
      < SearchTransaction 
         transaction={transaction}
        setTransaction={setTransaction}/>

      <TransactionDetails
        transaction={transaction}
        setTransaction={setTransaction}/>
    </>
  )
}

export default App
