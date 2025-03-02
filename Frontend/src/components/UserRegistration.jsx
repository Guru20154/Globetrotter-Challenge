import { useState } from "react";

const UserRegistration = ({ onRegister,error }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;
    onRegister(username);
  };
  const styles = {
    container:{
      display:"flex",
      flexDirection: "column",
      alignItems:"center"
    }
  }

  return (
    <div className="user-registration" style={styles.container}>
      <h2>Enter Your Username</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      {error && <p style={{ fontWeight:"bold" ,color: "red", marginTop: "5px" }}>{error}</p>}  {/* Display error here */}
    </div>
  );
};

export default UserRegistration;