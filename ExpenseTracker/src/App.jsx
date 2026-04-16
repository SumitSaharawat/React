import { useState } from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import TransactionDetails from './components/TransactionDetails'
import BudgetInitialization from './components/BudgetInitialization';
import BalanceSummary from './components/BalanceSummary';
import Categories from './components/Categories';

function App() {

  const [transaction, setTransaction] = useState([]);
  const [budget, setBudget] = useState(0);
  const [form, setForm] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];

  // Logic for calculations
  const totalExpense = transaction.reduce((acc, item) => acc + item.money, 0);
  const currentBudget = budget - totalExpense;

  const deleteTransaction = (idToDelete) => {
        const updatedTransaction = transaction.filter((item) => item.id !== idToDelete);
        setTransaction(updatedTransaction);
  };

  const updateText = (id, newText) => {
        const updatedTransaction = transaction.map((item) => 
            item.id === id ? { ...item, text: newText } : item
        );
        setTransaction(updatedTransaction);
  };



  return (
    <>
      <h1>Expense-Tracker</h1>

      <BudgetInitialization
        budget={budget}
        setBudget={setBudget}
        setForm={setForm}/>

      <BalanceSummary
        currentBudget={currentBudget}
        totalExpense={totalExpense}
        form={form}
        showInput={showInput}
        setShowInput={setShowInput}/>

      < AddTransaction
        transaction={transaction}
        setTransaction={setTransaction}
        showInput={showInput}
        setShowInput={setShowInput}
        categories={categories}/>

      <Categories
        transaction={transaction}
        categories={categories}
        deleteTransaction={deleteTransaction}
        updateText={updateText}
        form={form}
        />
        
      <TransactionDetails
        transaction={transaction}
        deleteTransaction={deleteTransaction}
        updateText={updateText}
        form={form}
        setForm={setForm}/>
    </>
  )
}

export default App
