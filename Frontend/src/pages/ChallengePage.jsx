import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GamePage from "./GamePage";

const ChallengePage = () => {
  const [searchParams] = useSearchParams();
  const inviter = searchParams.get("inviter");
  const [inviterScore, setInviterScore] = useState(null);

  useEffect(() => {
    if (inviter) {
      fetch(`https://globetrotter-challenge-tozv.vercel.app/api/user/profile/${inviter}`)
        .then((response) => response.json())
        .then((data) => setInviterScore(data.user.score));
    }
  }, [inviter]);

  return (
    <div style={styles.container}>
      {inviterScore ? (
        <div style={styles.scoreCard}>
          <h2 style={styles.title}>{inviter}'s Score:</h2>
          <div style={styles.scoreDetails}>
            <p style={styles.scoreText}>✅ Correct: {inviterScore.correct}</p>
            <p style={styles.scoreText}>❌ Incorrect: {inviterScore.incorrect}</p>
          </div>
        </div>
      ) : (
        <p style={styles.loadingText}>Loading inviter's score...</p>
      )}
      <GamePage />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreCard: {
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    textAlign: "center",
    width: "300px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "5px",
  },
  scoreDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  scoreText: {
    fontSize: "18px",
    color: "#27ae60", // Green for correct score
    margin: "2px",
  },
  loadingText: {
    fontSize: "18px",
    color: "#e74c3c", // Red for loading state
  },
};

export default ChallengePage;
