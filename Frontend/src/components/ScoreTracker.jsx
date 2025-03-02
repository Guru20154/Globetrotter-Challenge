
const ScoreTracker = ({ score }) => {
    const styles = {
      container: {
        margin: "20px 0",
        padding: "10px",
        width:"30vw",
        backgroundColor: "#242424",
        color:"#00C8C8",
        borderRadius: "5px",
        textAlign: "center",
      },
      heading: {
        margin: "0 0 10px 0",
        fontSize: "24px",
      },
      text: {
        margin: "5px 0",
        fontSize: "18px",
        fontWeight: "100"
      },
    };
  
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Score</h2>
        <p style={styles.text}>✅ Correct: {score.correct}</p>
        <p style={styles.text}>❌ Incorrect: {score.incorrect}</p>
      </div>
    );
  };
  
  export default ScoreTracker;