import { useState } from "react";

const EditTransaction = ({transaction, deleteTransaction, updateText}) => {

    const [isEdititng, setIsEditing] = useState(null)
    const [newText, setNewText] = useState("")

    return (
        <>
            <li 
                key={transaction.id}
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    padding: '10px', 
                    borderBottom: '1px solid #eee', 
                    backgroundColor: 'black',
                    color: "white",
                    borderRadius: "5px"
                }}>
                {isEdititng === transaction.id ? (
                    <>
                        <input 
                            type="text" 
                            value={newText} 
                            onChange={(e) => setNewText(e.target.value)}
                            style={{ borderRadius: '4px', padding: '2px 5px' }}
                        />
                        <button
                        onClick={() => {updateText(transaction.id, newText);
                                        setIsEditing("");}}
                        style={{ 
                            backgroundColor: "green", 
                            borderRadius: "5px", 
                            color: "white", 
                            padding: "5px 16px",
                            border: "none",
                            cursor: "pointer"
                        }}>Save</button>
                        <button
                        onClick={() => setIsEditing("")}
                        style={{ 
                            backgroundColor: "grey", 
                            borderRadius: "5px", 
                            color: "white", 
                            padding: "5px 16px",
                            border: "none",
                            cursor: "pointer"
                        }}>Cancel</button>
                    </>
                 ) : (
                    <>
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
                        <button
                        onClick={() => setIsEditing(transaction.id)}
                        style={{ 
                            backgroundColor: "orange", 
                            borderRadius: "5px", 
                            color: "white", 
                            padding: "5px 16px",
                            border: "none",
                            cursor: "pointer"
                        }}>Edit</button>
                    </>
                 )}
            </li>
        </>
    )
}

export default EditTransaction;