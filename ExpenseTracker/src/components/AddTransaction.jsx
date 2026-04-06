import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-left: 100px;
  margin-right: 100px;
`;

const Input = styled.input`
  width: 80%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #000;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

const RadioBtn = styled(RadioContainer)`
  margin: 10px 20px 10px 0;
`;

const SubmitBtn = styled.button`
  background-color: #44E610;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #44E610;
  }
`;

const AddTransaction = ({transaction, setTransaction}) => {
  
    const [amount, setAmount] = useState(0);
    const [detail, setDetail] = useState("");
    const [showInput, setShowInput] = useState(false);

    let totalAmount = 0;
    let budget = 15000;
    transaction.map((money) => {
        totalAmount += money.money;
        budget -= money.money;
    })

    const handleTransaction = () => {
        const newTransaction = {
            'money': Number(amount),
            'text': detail,
            'id' : Date.now()
        }

        setTransaction([...transaction, newTransaction]);
        setAmount("");
        setDetail("");
        setShowInput(false);
        
    }

  return (
    <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Budget: ₹{budget}
            </span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Expense: ₹{totalAmount}
            </span>
            <button
                onClick={() => setShowInput(true)}
                style={{ 
                    backgroundColor: "#44E610", 
                    borderRadius: "5px", 
                    color: "white", 
                    padding: "8px 16px", // Added some padding so it looks like a real button!
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Add
            </button>
        </div>

    {showInput && (
        <>
            <Input
                type={"number"}
                placeholder="Enter Amount"
                onChange={(e) => (setAmount(e.target.value))}
            />

            <Input
                type={"text"}
                placeholder="Enter Details"
                onChange={(e) => (setDetail(e.target.value))}
            />

            <SubmitBtn onClick={handleTransaction}>Add Transaction</SubmitBtn>
        </>
     )}
    </Container>
  );
};

export default AddTransaction;