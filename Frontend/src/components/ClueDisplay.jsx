const styles = {
  clueDisplay: {
    border: "2px solid #000",     // Accent border color
    borderRadius: "10px",
    padding: "10px",
    margin: "20px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    maxWidth: "600px",
    width: "30vw",                    // Responsive width
    transition: "transform 0.3s",    // Smooth hover effect
  },
  clueDisplayHover: {
    transform: "scale(1.02)",        // Slight scale on hover
  },
  heading: {
    color: "#000",                // Accent color for heading
    marginBottom: "10px",
    fontSize: "24px",
    textAlign: "center",
    fontWeight: "bold",
  },
  list: {
    listStyleType: "disc",           // Styled bullet points
    paddingLeft: "20px",
    color: "#000",
  },
  listItem: {
    marginBottom: "8px",
    lineHeight: "1.6",
    fontSize: "18px",
  },
};

const ClueDisplay = ({ clues }) => (
  <div
    className="clue-display"
    style={styles.clueDisplay}
    onMouseEnter={(e) => e.currentTarget.style.transform = styles.clueDisplayHover.transform}
    onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
  >
    <h2 style={styles.heading}>Clues:</h2>
    <ul style={styles.list}>
      {clues.map((clue, index) => (
        <li key={index} style={styles.listItem}>{clue}</li>
      ))}
    </ul>
  </div>
);

export default ClueDisplay;
