type QuestionCardProps = {
  questionNumber: number,
  questionTitle: string,
  questionCorrectAnswer: string,
  questionIncorrectAnswers: string[]
}

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionCorrectAnswer,
  questionIncorrectAnswers
}: QuestionCardProps) {
  return (
    <div className="question-card">
      <div className="question-number">
        {`QUESTION ${questionNumber} OF 10`}
      </div>
      <div className="question-title">
        {questionTitle}
      </div>
      <div className="question-answers">
        {
          questionIncorrectAnswers.map((incorrectAnswer) => (
            <p>
              {incorrectAnswer}
            </p>
          ))
        }
        {questionCorrectAnswer}
      </div>
    </div>
  )
}