let users = []; // In-memory storage for users (replace with a database in production)

export const registerUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "Username already taken" });
  }

  const newUser = {
    id: users.length + 1,
    username,
    score: { correct: 0, incorrect: 0 },
  };
  users.push(newUser);

  res.json({ message: "User registered successfully", user: newUser });
};

export const getUserProfile = (req, res) => {
  const { username } = req.params;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({ user });
};