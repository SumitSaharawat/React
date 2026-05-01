import { useState } from "react";
import { useTransactions } from "./Context/TransactionContext";
import '../styles/BalanceSummary.css';

const BudgetInitialization = () => {

    const {budget, setBudget, setForm, budgetInput, setBudgetInput, currentBudget, 
           totalExpense, showInput, setShowInput, transaction, 
           getPastSevenDaysTotal, getPastMonthTotal, getCategoryTotal } = useTransactions();


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
                <>
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
                    <div className="stats-container">
                        <div className="stat-card">
                            <span className="stat-title">Weekly Spendings</span>
                            <span className="stat-value">₹{getPastSevenDaysTotal}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Monthly Spendings</span>
                            <span className="stat-value">₹{getPastMonthTotal(transaction)}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Entertainment Spendings</span>
                            <span className="stat-value">₹{getCategoryTotal("Entertainment")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Food Spendings</span>
                            <span className="stat-value">₹{getCategoryTotal("Food")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Utilities Spendings</span>
                            <span className="stat-value">₹{getCategoryTotal("Utilities")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Housing Spendings</span>
                            <span className="stat-value">₹{getCategoryTotal("Housing")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-title">Other Spendings</span>
                            <span className="stat-value">₹{getCategoryTotal("Other")}</span>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default BudgetInitialization;