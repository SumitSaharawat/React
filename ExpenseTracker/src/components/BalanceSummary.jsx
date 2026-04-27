import "../styles/BalanceSummary.css";
import { useTransactions } from "./Context/TransactionContext";

const BalanceSummary = () => {

  const { currentBudget, totalExpense, form, showInput, setShowInput } = useTransactions();

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