import { useState } from "react";
import './styles/Goals.css'

const Goals = ({goals, setGoals}) => {
    const [goalsform, setgoalsForms] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(""); 
    const [note, setNote] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    const handleGoals = () => {
        const newGoal = {
            name: name,
            amount: amount,
            note: note,
            createdAt: new Date().toISOString(),
            id: Date.now()
        }

        setGoals([...goals, newGoal])
        
        setgoalsForms(false);
    }

    return (
        <div className="goals-container">
            <button 
                className="btn-goals" 
                onClick={() => setgoalsForms((prev) => (!prev))}
            >
                {goalsform ? "Cancel" : "Add New Goal"}
            </button>

            {goalsform && (
                <div className="goal-form-container">
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Target Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Goal Name (e.g., New Car)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className="input-field"
                        placeholder="Add any notes..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button className="btn-primary full-width" onClick={handleGoals}>
                        Create Goal
                    </button>
                </div>
            )}

            <div className="goal-list">
                {goals.map((goal) => (
                    <div key={goal.id} className="goal-card">
                        <div className="goal-header">
                            <span className="goal-name">{goal.name}</span>
                            <button>Contribute</button>
                            <span className="goal-amount">₹{goal.amount}</span>
                        </div>
                        <div className="goal-body">
                            <p className="goal-note">{goal.note}</p>
                            <span className="goal-date">
                                Created: {new Date(goal.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Goals;