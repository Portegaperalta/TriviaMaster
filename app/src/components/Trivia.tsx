import { useState, useEffect } from "react"
import QuestionCard from "./QuestionCard"

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

type TriviaProps = {
  randomQuestions: Question[]
}

export default function Trivia(props: TriviaProps) {
  let [userScore, setUserScore] = useState(0);

  const increaseUserScore = () => {
    setUserScore(userScore + 1);
  }

  return (
    props.randomQuestions ? (
      <div className="trivia flex flex-col items-center gap-4">
        {
          props.randomQuestions.map((randomQuestion) => (
            <QuestionCard
              questionNumber={props.randomQuestions.indexOf(randomQuestion) + 1}
              key={randomQuestion.question}
              questionTitle={randomQuestion.question}
              questionCorrectAnswer={randomQuestion.correct_answer}
              questionIncorrectAnswers={randomQuestion.incorrect_answers}
              onSelectCorrectAnswer={increaseUserScore}
            />
          ))
        }
      </div>
    ) : (
      <div className="trivia-error-message flex flex-col items-center">
        <div className="trivia-error-message-img">
          <img
            src="/error-icon.svg"
            alt="error icon"
            className="size-100"
          />
        </div>
        <p className="text-(--clr-white) text-[1.2rem] text-center">
          There was an error while getting the questions, please try later.
        </p>
      </div>
    )
  )
}