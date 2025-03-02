import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const FeedbackModal = ({ feedback, onNext }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth*0.98,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth*0.98,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Confetti
        width={dimensions.width} // Width as per the screen width
        height={dimensions.height} // Height as per the screen height
        recycle={false} // Confetti will not repeat after completion
      />
      <div style={styles.modalContainer}>
        <h2 style={feedback.isCorrect ? styles.correctHeading : styles.incorrectHeading}>
          {feedback.isCorrect ? "🎉 Correct!" : "😢 Incorrect!"}
        </h2>
        <p style={styles.funFact}>{feedback.funFact}</p>
        <button style={styles.nextButton} onClick={onNext}>
          Next Destination
        </button>
      </div>
    </>
  );
};

const styles = {
  modalContainer: {
    backgroundColor: "#fff",
    border: "2px solid #007F7F",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
    margin: "20px auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    position: "relative",
    zIndex: 10, // Ensure modal is on top of the confetti
  },
  correctHeading: {
    color: "#2ecc71",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  incorrectHeading: {
    color: "#e74c3c",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  funFact: {
    color: "#007F7F",
    fontSize: "18px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  nextButton: {
    backgroundColor: "#00A3A3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default FeedbackModal;
