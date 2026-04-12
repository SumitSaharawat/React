const FormSubmit = ({ data }) => {
  // Styles object to keep the JSX clean
  const styles = {
    container: {
      textAlign: "left",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "8px",
      border: "1px solid #eee",
    },
    title: {
      color: "#333",
      fontSize: "24px",
      marginBottom: "20px",
      textAlign: "center",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #e0e0e0",
      fontSize: "16px",
    },
    label: {
      fontWeight: "bold",
      color: "#666",
    },
    value: {
      color: "#000",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Review Your Info</h1>
      <ul style={styles.list}>
        <li style={styles.item}>
          <span style={styles.label}>First Name:</span>
          <span style={styles.value}>{data.firstName || "N/A"}</span>
        </li>
        <li style={styles.item}>
          <span style={styles.label}>Last Name:</span>
          <span style={styles.value}>{data.lastName || "N/A"}</span>
        </li>
        <li style={styles.item}>
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{data.email || "N/A"}</span>
        </li>
        <li style={styles.item}>
          <span style={styles.label}>Phone:</span>
          <span style={styles.value}>{data.phone || "N/A"}</span>
        </li>
        <li style={styles.item}>
          <span style={styles.label}>Address:</span>
          <span style={styles.value}>{data.address || "N/A"}</span>
        </li>
      </ul>
      <p style={{ marginTop: '20px', color: '#44E610', fontWeight: 'bold', textAlign: 'center' }}>
        ✓ Ready to submit!
      </p>
    </div>
  );
};

export default FormSubmit;