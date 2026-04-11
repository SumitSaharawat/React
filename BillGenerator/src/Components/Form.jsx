import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [items, setItems] = useState([]);

    // Logic: Calculate total using reduce
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleItems = () => {
        if (!name || !price || !quantity) return;

        const newItem = {
            name: name,
            price: Number(price),
            quantity: Number(quantity),
            id: Date.now()
        };

        setItems([...items, newItem]);
        setName("");
        setPrice("");
        setQuantity("");
    };

    const updateBill = (id) => { 
        setItems(items.filter((item) => item.id !== id))
    }

    // --- Styles Objects ---
    const styles = {
        container: {
            maxWidth: "500px",
            margin: "40px auto",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        },
        inputSection: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #eee",
            borderRadius: "8px"
        },
        inputGroup: {
            display: "flex",
            flexDirection: "column",
            gap: "5px"
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
        },
        button: {
            backgroundColor: "#44E610",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
        },
        listItem: {
            display: "flex",
            justifyContent: "space-between",
            padding: "12px",
            backgroundColor: "#f4f4f4",
            marginBottom: "8px",
            borderRadius: "6px",
            listStyle: "none"
        },
        totalText: {
            textAlign: "right",
            fontSize: "22px",
            fontWeight: "bold",
            marginTop: "20px",
            borderTop: "2px solid #44E610",
            paddingTop: "10px"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{ textAlign: "center", color: "#333" }}>Bill Generator</h2>

            <div style={styles.inputSection}>
                <div style={styles.inputGroup}>
                    <span>Item Name:</span>
                    <input
                        style={styles.input}
                        placeholder="e.g., Bread"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ ...styles.inputGroup, flex: 1 }}>
                        <span>Qty:</span>
                        <input
                            type="number"
                            style={styles.input}
                            placeholder="0"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div style={{ ...styles.inputGroup, flex: 1 }}>
                        <span>Price:</span>
                        <input
                            type="number"
                            style={styles.input}
                            placeholder="0"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                <button style={styles.button} onClick={handleItems}>
                    Add to List
                </button>
            </div>

            <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "5px" }}>Current Items</h3>
            <ul style={{ padding: 0 }}>
                {items.length === 0 && <p style={{ color: "#888" }}>List is empty...</p>}
                {items.map((item) => (
                    <li key={item.id} style={styles.listItem}>
                        <div>
                            <strong>{item.name}</strong> 
                            <span style={{ color: "#666", marginLeft: "10px" }}>(x{item.quantity})</span>
                        </div>
                        <span style={{ fontWeight: "bold" }}>₹{item.price * item.quantity}</span>
                        <button
                        onClick={() => updateBill(item.id)}
                        style={{background:"red", padding:"5px", borderRadius:"5px", color:"white"}}>X</button>
                    </li>
                ))}
            </ul>

            <div style={styles.totalText}>
                Total: ₹{totalPrice}
            </div>
        </div>
    );
};

export default Form;