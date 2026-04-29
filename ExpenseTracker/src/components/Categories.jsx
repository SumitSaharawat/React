import "../styles/Categories.css"; // Don't forget to import the CSS!
import EditTransaction from "./EditTransaction";
import { useTransactions } from "./Context/TransactionContext";
import { useState } from "react";

const Categories = () => {

    const { transaction, categories, deleteTransaction, updateText, form } = useTransactions();
    const [limit, setLimit] = useState(Number(3));

    return (
        <>
            <div className="categories-wrapper">
                {categories.map((category) => {
                    const filteredTransaction = transaction.filter((item) => item.category === category).slice(0,limit);

                    const expense = filteredTransaction.reduce((acc, item) => acc + item.money,0);

                    return (
                        <div key={category} className="category-group">
                            <h2 className="category-title">
                                <span>{category}</span>
                                <span className="category-total">Total: ₹{expense}</span>
                            </h2>
                            
                            <ul className="category-transaction-list">
                                {filteredTransaction.map((item) => (
                                    <EditTransaction 
                                        key={item.id} 
                                        transaction={item} 
                                        deleteTransaction={deleteTransaction} 
                                        updateText={updateText}
                                    />
                                ))}
                            </ul>
                            <button onClick={() => setLimit((prev) => (prev+3))}>View More</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;