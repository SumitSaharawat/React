import { useState } from "react";
import "./AddTransaction.css";

const AddTransaction = ({ transaction, setTransaction }) => {
  const [amount, setAmount] = useState("");
  const [detail, setDetail] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [category, setCategory] = useState("");
  
  const categories = ["Entertainment", "Grocery", "Rent", "Car", "Salary"];

  // Logic for calculations
  let totalAmount = 0;
  let budget = 15000;
  transaction.forEach((money) => {
    totalAmount += money.money;
    budget -= money.money;
  });

  const handleTransaction = () => {
    if (!amount || !category) return; // Simple validation

    const newTransaction = {
      money: Number(amount),
      text: detail,
      id: Date.now(),
      category: category,
    };

    setTransaction([...transaction, newTransaction]);
    
    // Reset form
    setAmount("");
    setDetail("");
    setCategory("");
    setShowInput(false);
  };

  return (
    <div className="transaction-container">
      <div className="balance-row">
        <span className="balance-text">Budget: ₹{budget}</span>
        <span className="balance-text">Expense: ₹{totalAmount}</span>
        <button className="btn-primary" onClick={() => setShowInput(!showInput)}>
          {showInput ? "Cancel" : "Add"}
        </button>
      </div>

      {showInput && (
        <div className="form-content">
          <input
            className="input-field"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            className="input-field"
            type="text"
            placeholder="Enter Details"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <div style={{ textAlign: 'left', fontSize: "14px", fontWeight: "bold" }}>
            Select Category
          </div>

          <div className="category-wrapper">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`chip ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          <button className="btn-primary full-width" onClick={handleTransaction}>
            Add Transaction
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTransaction;