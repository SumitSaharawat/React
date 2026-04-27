import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];
  const [goals, setGoals] = useState([]);
  const [budget, setBudget] = useState(0);
  const [form, setForm] = useState(false);
  const [budgetInput, setBudgetInput] = useState(true);

 
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
        form, setForm,
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