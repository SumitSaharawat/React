const TransactionDetails = ({ transaction, setTransaction }) => {

    const deleteTransaction = (idToDelete) => {
        const updatedTransaction = transaction.filter((transaction) => transaction.id !== idToDelete);
        setTransaction(updatedTransaction);
    }

  return (
    <>
        {transaction.map((transaction, index) => (
            
            <li 
                key={index}
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    padding: '10px', 
                    borderBottom: '1px solid #eee', 
                    backgroundColor: 'black',
                    color: "white",
                    borderRadius: "5px"
                }}>
                <span>{transaction.text}</span>
                <span>₹{transaction.money}</span>
                <button
                onClick={() => deleteTransaction(transaction.id)}
                style={{ 
                    backgroundColor: "red", 
                    borderRadius: "5px", 
                    color: "white", 
                    padding: "5px 16px",
                    border: "none",
                    cursor: "pointer"
                }}>Remove</button>
            </li>
            
        ))}
    </>
  );
};

export default TransactionDetails;