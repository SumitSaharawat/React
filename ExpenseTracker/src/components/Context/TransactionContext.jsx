import React, { createContext, useState, useContext, useEffect } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState(() => {
        const savedTransactions = localStorage.getItem("my_transactions");
        return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

  const [showInput, setShowInput] = useState(false);
  const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];
  const [goals, setGoals] = useState([]);
  
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("myBudget");
    return saved ? JSON.parse(saved) : 0;
  });
  
  const [budgetInput, setBudgetInput] = useState(() => {
    const savedBudgetInput = localStorage.getItem("myBudgetInput");
    return savedBudgetInput !== null ? JSON.parse(savedBudgetInput) : true;
  });

  useEffect(() => {
        localStorage.setItem("my_transactions", JSON.stringify(transaction));
        localStorage.setItem("myBudgetInput", JSON.stringify(budgetInput))
        localStorage.setItem("myBudget", JSON.stringify(budget))
    }, [transaction, budgetInput, budget]);
 
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


  return (
    <TransactionContext.Provider value={{ 
        transaction, setTransaction,
        goals, setGoals,
        budget, setBudget,
        showInput, setShowInput,
        budgetInput, setBudgetInput,
        categories,
        totalExpense,
        currentBudget,
        deleteTransaction,
        updateText
    }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);