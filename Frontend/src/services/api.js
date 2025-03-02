export const fetchRandomDestination = async () => {
    const response = await fetch("https://globetrotter-challenge-tozv.vercel.app//api/random-destination");
    return response.json();
};

export const validateUserAnswer = async (alias, userAnswer) => {
    const response = await fetch("https://globetrotter-challenge-tozv.vercel.app//api/validate-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alias, userAnswer }),
    });
    return response.json();
};