import { useState } from "react";
import { useTransactions } from "./Context/TransactionContext";
import '../styles/BalanceSummary.css';

const BudgetInitialization = () => {

    const {budget, setBudget, setForm, budgetInput, setBudgetInput, currentBudget, totalExpense, showInput, setShowInput} = useTransactions();

    const handleForms = () => {
        setBudgetInput(false)
        setForm(true)
    }
    return(
        <>
            {budgetInput ? (
                <div className="budget-setup-container">
                    <h2 className="budget-setup-title">Welcome! Set your Monthly Budget</h2>
                    
                    <input 
                        type="number"
                        className="budget-input"
                        placeholder="Enter amount"
                        onChange={(e) => setBudget(e.target.value)}
                    />
                    
                    <button 
                        className="btn-primary full-width" 
                        style={{ maxWidth: '300px' }}
                        onClick={() => {
                            if(budget > 0) handleForms();
                            else alert("Please enter a valid budget");
                        }}
                    >
                        Save & Start Tracking
                    </button>
                </div>
            ) : (
                <div className="summary-container">
                    <div className="balance-row">
                        <span className="balance-text">Budget: ₹{currentBudget}</span>
                        <span className="balance-text">Expense: ₹{totalExpense}</span>
                        <button 
                        className="btn-summary" 
                        onClick={() => setShowInput(!showInput)}
                        >
                        {showInput ? "Cancel" : "Add"}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default BudgetInitialization;