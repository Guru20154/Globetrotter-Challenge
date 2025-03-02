import { useEffect, useState } from "react";
import GamePage from "./pages/GamePage";
import ChallengePage from "./pages/ChallengePage"; // Assuming you have a ChallengePage component

const App = () => {
  const [isChallenge, setIsChallenge] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inviter = urlParams.get('inviter');
    
    // If 'inviter' exists in the URL, set isChallenge to true
    setIsChallenge(!!inviter);
  }, []);

  return (
    <div>
      <h1 style={{ color: "rgb(0, 200, 200)", margin: "10px" }}>Globetrotter Challenge</h1>
      {isChallenge ? <ChallengePage /> : <GamePage />}
    </div>
  );
};

export default App;
