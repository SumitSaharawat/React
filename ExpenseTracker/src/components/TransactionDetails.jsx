import { useState } from "react";
import EditTransaction from "./EditTransaction";
import "../styles/TransactionDetails.css"; 

const TransactionDetails = ({ transaction, deleteTransaction, updateText, form }) => {

    
    const [searchInput, setSearchInput] = useState("");


    const filteredTransaction = transaction.filter((item) => 
        item.text.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            {form && (
                <div className="details-container">
                    <h2 className="details-heading">Transactions</h2>

                    <div className="search-wrapper">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search transactions..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        
                        <button className="search-icon-btn" aria-label="Search">
                            <svg 
                                width="20" height="20" viewBox="0 0 24 24" fill="none" 
                                stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>

                    {filteredTransaction.map((item) => (
                        <EditTransaction 
                            key={item.id} 
                            transaction={item} 
                            deleteTransaction={deleteTransaction} 
                            updateText={updateText}
                        />
                    ))}
                    
                    {filteredTransaction.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
                            No matches found.
                        </p>
                    )}
                </div>
            )}
        </>
    );
};

export default TransactionDetails;