import "../styles/Categories.css"; // Don't forget to import the CSS!
import EditTransaction from "./EditTransaction";
import { useTransactions } from "./Context/TransactionContext";

const Categories = () => {

    const { transaction, categories, deleteTransaction, updateText, form } = useTransactions();

    return (
        <>
            {form && (
                <div className="categories-wrapper">
                    {categories.map((category) => {
                        const filteredTransaction = transaction.filter((item) => item.category === category);

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
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Categories;