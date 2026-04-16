import "../styles/Categories.css"; // Don't forget to import the CSS!
import EditTransaction from "./EditTransaction";

const Categories = ({ transaction, categories, deleteTransaction, updateText, form }) => {
    return (
        <>
            {form && (
                <div className="categories-wrapper">
                    {categories.map((category) => {
                        const filteredTransaction = transaction.filter((item) => item.category === category);

                        // Optional but recommended: Don't show the category if it has 0 transactions
                        if (filteredTransaction.length === 0) return null;

                        return (
                            <div key={category} className="category-group">
                                <h2 className="category-title">{category}</h2>
                                
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