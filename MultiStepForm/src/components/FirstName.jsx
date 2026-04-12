const FirstName = ({ data, setData }) => {
    
    // Unified change handler to keep code DRY
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: "left",
            maxWidth: "400px",
            margin: "0 auto"
        },
        inputGroup: {
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        },
        label: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#02295a"
        },
        input: {
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #d6d9e6",
            fontSize: "16px",
            color: "#02295a",
            outline: "none"
        }
    };

    return (
        <div style={styles.container}>
            <div style={{ marginBottom: "10px" }}>
                <h2 style={{ color: "#02295a", margin: "0" }}>Personal info</h2>
                <p style={{ color: "#9699ab", margin: "5px 0" }}>Please provide your name, email address, and phone number.</p>
            </div>

            <div style={styles.inputGroup}>
                <span style={styles.label}>First Name</span>
                <input
                    style={styles.input}
                    name="firstName" // Must match key in formData
                    placeholder="e.g. Stephen"
                    value={data.firstName}
                    onChange={handleChange}
                />
            </div>

            <div style={styles.inputGroup}>
                <span style={styles.label}>Last Name</span>
                <input
                    style={styles.input}
                    name="lastName"
                    placeholder="e.g. King"
                    value={data.lastName}
                    onChange={handleChange}
                />
            </div>

            <div style={styles.inputGroup}>
                <span style={styles.label}>Email Address</span>
                <input
                    style={styles.input}
                    name="email"
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div style={styles.inputGroup}>
                <span style={styles.label}>Phone Number</span>
                <input
                    style={styles.input}
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    value={data.phone}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default FirstName;