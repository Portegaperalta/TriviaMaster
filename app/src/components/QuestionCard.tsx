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
    <div className="question-card bg-(--clr-gray-blue) py-6 px-4 rounded-lg
    w-full max-w-240">
      <div className="question-number text-(--clr-white) text-[1rem] mb-2">
        {`QUESTION ${questionNumber} OF 10`}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: questionTitle }}
        className="question-title text-(--clr-white) text-[1.75rem]"
      />
      <div className="question-answers py-14 flex flex-col gap-6">
        {
          questionIncorrectAnswers.map((incorrectAnswer) => (
            <p
              key={incorrectAnswer}
              dangerouslySetInnerHTML={{ __html: incorrectAnswer }}
              className="text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
              cursor-pointer hover:bg-(--clr-light-blue) duration-75 ease-in-out"
            />
          ))
        }
        <p
          dangerouslySetInnerHTML={{ __html: questionCorrectAnswer }}
          className="text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
        cursor-pointer hover:bg-(--clr-light-blue) duration-75 ease-in-out">
        </p>
      </div>
    </div>
  )
}