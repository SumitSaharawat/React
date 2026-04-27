import { useState } from "react";
import './styles/Goals.css';
import GoalItem from "./GoalItem";
import { useTransactions } from "../Context/TransactionContext";

const Goals = () => {

    const { goals, setGoals } = useTransactions();

    const [goalsform, setgoalsForms] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(""); 
    const [note, setNote] = useState("");

    const handleGoals = () => {
        if (!name || !amount) return;
        const newGoal = {
            name: name,
            amount: Number(amount),
            saved: 0,
            note: note,
            createdAt: new Date().toISOString(),
            id: Date.now()
        };
        setGoals([...goals, newGoal]);
        setgoalsForms(false);
        // Clear form
        setName(""); setAmount(""); setNote("");
    };

    // This function targets a specific goal by ID and updates its saved total
    const updateGoalAmount = (id, money) => {
        const updated = goals.map(g => 
            g.id === id ? { ...g, saved: Number(g.saved) + money } : g
        );
        setGoals(updated);
    };

    return (
        <div className="goals-container">
            <button className="btn-goals" onClick={() => setgoalsForms(!goalsform)}>
                {goalsform ? "Cancel" : "Add New Goal"}
            </button>

            {goalsform && (
                <div className="goal-form-container">
                    <input className="input-field" type="number" placeholder="Target Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <input className="input-field" type="text" placeholder="Goal Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea className="input-field" placeholder="Notes..." value={note} onChange={(e) => setNote(e.target.value)} />
                    <button className="btn-primary full-width" onClick={handleGoals}>Create Goal</button>
                </div>
            )}

            <div className="goal-list">
                {goals.map((goal) => (
                    <GoalItem 
                        key={goal.id} 
                        goal={goal} 
                        onUpdateSaved={updateGoalAmount} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Goals;