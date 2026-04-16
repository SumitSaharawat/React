import { useState } from "react";
import "../styles/AddTransaction.css"

const AddTransaction = ({ transaction, setTransaction, showInput, setShowInput, categories}) => {
  const [amount, setAmount] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");

  const handleTransaction = () => {
    if (!amount || !category) return; 

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
    <>
            {showInput && (
                <div className="transaction-container">
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
                </div>
            )}
    </>
  );
};

export default AddTransaction;