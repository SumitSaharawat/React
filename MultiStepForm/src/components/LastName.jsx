const LastName = ({ next, data, setData }) => {
    const plans = [
        { id: 1, name: "Arcade", price: "$9/mo", icon: "🕹️" },
        { id: 2, name: "Advance", price: "$12/mo", icon: "🚀" },
        { id: 3, name: "Pro", price: "$15/mo", icon: "🏆" }
    ];

    // --- Styles Object ---
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "20px"
        },
        card: (isSelected) => ({
            display: "flex",
            alignItems: "center",
            padding: "16px",
            borderRadius: "8px",
            border: isSelected ? "2px solid #483eff" : "1px solid #d6d9e6",
            backgroundColor: isSelected ? "#f8f9ff" : "white",
            cursor: "pointer",
            transition: "all 0.2s ease",
            textAlign: "left"
        }),
        icon: {
            fontSize: "30px",
            marginRight: "15px"
        },
        planName: {
            fontWeight: "bold",
            color: "#02295a",
            display: "block"
        },
        price: {
            color: "#9699ab",
            fontSize: "14px"
        }
    };

    return (
        <div style={{ padding: "10px" }}>
            <h2 style={{ color: "#02295a", margin: "0 0 10px 0" }}>Select your plan</h2>
            <p style={{ color: "#9699ab", marginBottom: "20px" }}>
                You have the option of monthly or yearly billing.
            </p>

            <div style={styles.container}>
                {plans.map((plan) => {
                    // Fundamental: Check if this plan name is the one currently in state
                    const isSelected = data.offer === plan.name;

                    return (
                        <div
                            key={plan.id}
                            style={styles.card(isSelected)}
                            onClick={() => setData((prev) => ({ ...prev, offer: plan.name }))}
                        >
                            <span style={styles.icon}>{plan.icon}</span>
                            <div>
                                <span style={styles.planName}>{plan.name}</span>
                                <span style={styles.price}>{plan.price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LastName;