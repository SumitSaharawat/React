import { useState } from "react";

const BudgetInitialization = ({budget, setBudget, setForm, budgetInput, setBudgetInput}) => {

    const handleForms = () => {
        setBudgetInput(false)
        setForm(true)
    }
    return(
        <>
            {budgetInput && (
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
            )}
        </>
    )
}

export default BudgetInitialization;