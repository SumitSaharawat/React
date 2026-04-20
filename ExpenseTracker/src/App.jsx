import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  const [toggle, setToggle] = useState(true);
  const [budgetInput, setBudgetInput] = useState(true);

  const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];

  // Logic for calculations
  const totalExpense = transaction.reduce((acc, item) => acc + item.money, 0);
  const currentBudget = budget - totalExpense;

  const deleteTransaction = (idToDelete) => {
        setTransaction(transaction.filter((item) => item.id !== idToDelete));
  };

  const updateText = (id, newText) => {
        setTransaction(transaction.map((item) => 
            item.id === id ? { ...item, text: newText } : item
        ));
  };

  const toggleTheme = () => setToggle(!toggle);

  return (
    <BrowserRouter>
      <div className={toggle ? "dark-theme" : ""}>
        <header className="main-header">
          <h1>Expense-Tracker</h1>
          <nav className="nav-bar">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/transactions" className="nav-link">Transactions</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <button onClick={toggleTheme} className="theme-btn">
              {toggle ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>

        <div className="content-area">
          <Routes>
            {/* HOME PAGE: Summary and Adding functionality */}
            <Route path="/" element={
              <>
                <BudgetInitialization 
                  budget={budget} 
                  setBudget={setBudget} 
                  setForm={setForm}
                  budgetInput={budgetInput}
                  setBudgetInput={setBudgetInput}/>
                <BalanceSummary 
                  currentBudget={currentBudget} 
                  totalExpense={totalExpense} 
                  form={form} 
                  showInput={showInput} 
                  setShowInput={setShowInput}/>
                <AddTransaction 
                  transaction={transaction} 
                  setTransaction={setTransaction} 
                  showInput={showInput} 
                  setShowInput={setShowInput} 
                  categories={categories}/>
              </>
            } />

            {/* TRANSACTION PAGE: Filtering and List mapping */}
            <Route path="/transactions" element={
              <>
                <TransactionDetails 
                  transaction={transaction} 
                  deleteTransaction={deleteTransaction} 
                  updateText={updateText} 
                  form={form} 
                  setForm={setForm} />
              </>
            } />

            <Route path="/categories" element={
              <>
                <Categories 
                  transaction={transaction} 
                  categories={categories} 
                  deleteTransaction={deleteTransaction} 
                  updateText={updateText} 
                  form={form}  />
              </>
            } />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;