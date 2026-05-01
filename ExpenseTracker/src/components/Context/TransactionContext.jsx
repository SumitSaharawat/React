import React, { createContext, useState, useContext, useEffect } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState(() => {
        const savedTransactions = localStorage.getItem("my_transactions");
        return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

  const [showInput, setShowInput] = useState(false);
  const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("myGoals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });
  
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("myBudget");
    return saved ? JSON.parse(saved) : 0;
  });
  
  const [budgetInput, setBudgetInput] = useState(() => {
    const savedBudgetInput = localStorage.getItem("myBudgetInput");
    return savedBudgetInput !== null ? JSON.parse(savedBudgetInput) : true;
  });
 
  const totalExpense = transaction.reduce((acc, item) => acc + item.money, 0);
  const currentBudget = (budget - totalExpense <= 0) ? 0 : (budget - totalExpense);

  useEffect(() => {
    if (budget > 0 && totalExpense >= budget) {
      alert('No Budget Left!');
    }
  }, [totalExpense, budget]);

  const deleteTransaction = (idToDelete) => {
        setTransaction(transaction.filter((item) => item.id !== idToDelete));
  };

  const updateText = (id, newText) => {
        setTransaction(transaction.map((item) => 
            item.id === id ? { ...item, text: newText } : item
        ));
  };

  const seedMockData = () => {
    const mockData = [];
    const categories = ["Entertainment", "Food", "Utilities", "Transport", "Housing"];
    
    for (let i = 0; i < 100; i++) {
        mockData.push({
            money: Math.floor(Math.random() * 1000) + 50,
            text: `Mock Transaction ${i + 1}`,
            id: Date.now() + i, // Unique ID
            category: categories[Math.floor(Math.random() * categories.length)],
            notes: "Testing 100 items",
            date: new Date().toISOString().split('T')[0]
        });
    }
    
    // This updates your state AND your LocalStorage automatically via your useEffect
    setTransaction(prev => [...prev, ...mockData]);
    alert("100 Transactions added!");
};

const getPastSevenDaysTotal = transaction
    .filter(item => {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);
        return new Date(item.date) >= sevenDaysAgo;
    })
    .reduce((acc, item) => acc + item.money, 0);

const getPastMonthTotal = (transaction) => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    oneMonthAgo.setDate(1);
    oneMonthAgo.setHours(0, 0, 0, 0); 

    const oneMonthTransactions = transaction.filter(item => {
        return new Date(item.date) >= oneMonthAgo;
    })

    return oneMonthTransactions.reduce((acc, item) => acc + item.money, 0);
}

useEffect(() => {
        localStorage.setItem("my_transactions", JSON.stringify(transaction));
        localStorage.setItem("myBudgetInput", JSON.stringify(budgetInput));
        localStorage.setItem("myBudget", JSON.stringify(budget));
        localStorage.setItem("myGoals", JSON.stringify(goals));
    }, [transaction, budgetInput, budget, goals]);


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
        updateText,
        seedMockData,
        getPastSevenDaysTotal,
        getPastMonthTotal
    }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);