import getAPIURL from "@/src/utils/getAPIURL";

const generateQuestions = async (prompt, context, language) => {
  try {
    const response = await fetch(`${getAPIURL}/generate-questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Set-Cookie",
      },
      withCredentials: true,
      body: JSON.stringify({ prompt, context, language }),
    });
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.warn({ error });
    return error;
  }
};

export default generateQuestions;
