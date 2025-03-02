export const fetchRandomDestination = async () => {
    const response = await fetch("http://localhost:3000/api/random-destination");
    return response.json();
};

export const validateUserAnswer = async (alias, userAnswer) => {
    const response = await fetch("http://localhost:3000/api/validate-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alias, userAnswer }),
    });
    return response.json();
};