    import { useState, useEffect } from "react";
    import { fetchRandomDestination, validateUserAnswer } from "../services/api";
    import UserRegistration from "../components/UserRegistration";
    import ChallengeFriend from "../components/ChallengeFriend";
    import ClueDisplay from "../components/ClueDisplay";
    import FeedbackModal from "../components/FeedbackModal";
    import ScoreTracker from "../components/ScoreTracker";

    const GamePage = () => {
      const [destination, setDestination] = useState(null);
      const [userAnswer, setUserAnswer] = useState("");
      const [feedback, setFeedback] = useState(null);
      const [score, setScore] = useState({ correct: 0, incorrect: 0 });
      const [username, setUsername] = useState("");
      const [error, setError] = useState("");

      const loadNewDestination = async () => {
        const data = await fetchRandomDestination();
        setDestination(data);
        setUserAnswer("");
        setFeedback(null);
      };

      const handleSubmit = async () => {
        const { isCorrect, funFact } = await validateUserAnswer(destination.alias, userAnswer);
        setFeedback({ isCorrect, funFact });
        setScore((prev) => ({
          correct: prev.correct + (isCorrect ? 1 : 0),
          incorrect: prev.incorrect + (isCorrect ? 0 : 1),
        }));
      };

      const handleRegister = async (username) => {
        try {
          // First, check if the user already exists by fetching the user profile
          const profileResponse = await fetch(`https://globetrotter-challenge-tozv.vercel.app//api/user/profile/${username}`);
          
          if (profileResponse.ok) {
            // If the user exists, fetch the profile data
            const profileData = await profileResponse.json();
            setUsername(profileData.user.username); // Set the username from the profile
            setError(""); // Clear any previous errors
          } else {
            // If the profile does not exist, proceed with registration
            const registerResponse = await fetch("https://globetrotter-challenge-tozv.vercel.app//api/user/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username }),
            });
            const data = await registerResponse.json();
      
            if (registerResponse.ok) {
              // Successfully registered, set the username
              setUsername(data.user.username);
              setError(""); // Clear error if successful
            } else {
              setError(data.message || "Registration failed"); // Set error message
            }
          }
        } catch (err) {
          setError("Something went wrong. Please try again.");
        }
      };    

      useEffect(() => {
        loadNewDestination();
      }, []);

      // 🎨 Updated styles with text colors
      const styles = {
        container: {
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#00C8C8",
          padding: "20px",
          color: "#333"  // Default text color
        },
        title: {
          color: "#2c3e50",  // Darker text for titles
          fontSize: "24px",
          marginBottom: "10px"
        },
        button: {
          padding: "5px 10px",
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer"
        },
        correct: {
          color: "#27ae60"  // Green for correct answers
        },
        incorrect: {
          color: "#e74c3c"  // Red for incorrect answers
        }
      };

      return (
        <div style={styles.container}>
          {!username ? (
            <UserRegistration onRegister={handleRegister} error={error} />
          ) : (
            <>
              <h2 style={styles.title}>Welcome, {username}!</h2>
              <ChallengeFriend username={username} />
              <ScoreTracker score={score} />
              {destination && (
                <>
                  <ClueDisplay clues={destination.clues} />
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your guess"
                  />
                  <button onClick={handleSubmit}>Submit</button>
                </>
              )}
              {feedback && (
                <FeedbackModal
                  feedback={feedback}
                  onNext={loadNewDestination}
                  style={feedback.isCorrect ? styles.correct : styles.incorrect}
                />
              )}
            </>
          )}
        </div>
      );
    };

    export default GamePage;
