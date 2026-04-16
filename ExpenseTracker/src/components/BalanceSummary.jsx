import "../styles/BalanceSummary.css";

const BalanceSummary = ({ currentBudget, totalExpense, form, showInput, setShowInput }) => {
  return (
    <>
      {form && (
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
  );
};

export default BalanceSummary;