import axios from "axios";

const getRandomQuestions = async () => {
  const baseUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
  const config = { headers: { Accept: "application/json" } }

  try {
    const response = await axios.get(baseUrl, config);
    const questions = response.data.results
    console.log(questions);
  } catch (error) {
    console.error(`Error fetching questions: ${error}`);
  }
}

export default getRandomQuestions