import { useEffect, useState } from "react";
import styled from "styled-components";
import EditTransaction from "./EditTransaction"

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;



// 1. The Boundary Box
const SearchWrapper = styled.div`
    position: relative;
    width: 100%; 
    max-width: 400px; /* Adjust this to fit your design */
    margin-bottom: 20px;
`;

// 2. The Input Field
const SearchInput = styled.input`
    width: 100%;
    padding: 12px 15px;
    
    /* CRITICAL: Extra padding on the right so text doesn't slide under the icon! */
    padding-right: 45px; 
    
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box; /* Keeps padding from breaking the width */
    outline: none;

    &:focus {
        border-color: #007bff; /* Optional focus glow */
    }
`;

// 3. The Floating Button
const SearchIconBtn = styled.button`
    position: absolute;
    right: 12px;           /* 12px from the right edge */
    top: 50%;              /* Push down halfway */
    transform: translateY(-50%); /* Pull up exactly to the vertical center */
    
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    
    /* Optional hover effect for the icon */
    &:hover svg {
        stroke: #007bff; 
    }
`;

const TransactionDetails = ({ transaction, setTransaction }) => {

    const deleteTransaction = (idToDelete) => {
        const updatedTransaction = transaction.filter((transaction) => transaction.id !== idToDelete);
        setTransaction(updatedTransaction);
    }

    const [searchInput, setSearchInput] = useState("")

    const updateText = (id, newText) => {
        const updatedTransaction = transaction.map((item) => item.id === id ? {...item, text: newText} : item);
        setTransaction(updatedTransaction)
    }

    const filteredTransaction = transaction.filter((item) => item.text.toLowerCase().includes(searchInput.toLowerCase()));
 
  return (
    <>
        <Container>
                <Heading>Transactions</Heading>

                <SearchWrapper>
                    
                    <SearchInput
                        type="text"
                        placeholder="Search here"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    
                    <SearchIconBtn>
                        <svg 
                            width="20" height="20" viewBox="0 0 24 24" fill="none" 
                            stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </SearchIconBtn>

                </SearchWrapper>

        </Container>

        {filteredTransaction.map((item) => (
            
            <EditTransaction 
                key={item.id} 
                transaction={item} 
                deleteTransaction={deleteTransaction} 
                updateText={updateText}
        />
            
        ))}
        
        {filteredTransaction.length === 0 && (
                <p style={{ textAlign: 'center', color: '#666' }}>No matches found.</p>
        )}
    </>
  );
};

export default TransactionDetails;