import { useState } from "react";
import Trivia from "./Trivia";
import ButtonGetStarted from "./ui/ButtonGetStarted";
import getRandomQuestions from "../api/getRandomQuestions";

type Question = {
  type: string,
  difficulty: "medium",
  category: "General Knowledge",
  question: "When was Nintendo founded?",
  correct_answer: "September 23rd, 1889",
  incorrect_answers: [
    "October 19th, 1891",
    "March 4th, 1887",
    "December 27th, 1894"
  ]
}

export default function Home() {
  const [isStartButtonClicked, setIsStartButtonClicked] = useState<boolean>(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  const handeStartButtonClick = async () => {
    setIsStartButtonClicked(!isStartButtonClicked);
    const fetchedQuestions = await getRandomQuestions();
    setRandomQuestions(fetchedQuestions);
  }

  return (
    <div className="home px-2 py-30">
      <div className={`home-intro text-center space-y-10 
        ${isStartButtonClicked ? `hidden` : `inline-block`}`}>
        <div className="home-title relative flex flex-col text-[4rem]/16">
          <h1 className="text-transparent font-[800] relative right-8 bg-clip-text 
        bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_100%)]">
            <span className="text-[5rem]">T</span>rivia
          </h1>
          <h2 className="text-transparent font-[800] relative left-4 bg-clip-text 
        bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_100%)]">
            <span className="text-[5rem]">M</span>aster
          </h2>
        </div>
        <div className="home-description space-y-4">
          <p className="text-(--clr-white) text-[1.8rem] font-[600]">
            Test your knowledge!
          </p>
          <p className="text-(--clr-white-opacity) text-[1.13rem] font-[600]">
            Challenge yourself with randomly generated quizzes
          </p>
        </div>
        <ButtonGetStarted onClick={handeStartButtonClick} />
      </div>
      <Trivia randomQuestions={randomQuestions} />
    </div>
  )
}