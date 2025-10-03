import QuestionCard from "./QuestionCard"

type Question = {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

type TriviaProps = {
  randomQuestions: Question[]
}

export default function Trivia(props: TriviaProps) {
  return (
    props.randomQuestions ? (
      <div className="trivia space-y-6">
        {
          props.randomQuestions.map((randomQuestion, i) => (
            <QuestionCard
              key={i}
              questionNumber={i + 1}
              questionTitle={randomQuestion.question}
              questionCorrectAnswer={randomQuestion.correct_answer}
              questionIncorrectAnswers={randomQuestion.incorrect_answers}
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