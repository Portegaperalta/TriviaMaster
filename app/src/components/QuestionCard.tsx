import DOMPurify from "dompurify"
import ButtonNextQuestion from "./ui/ButtonNextQuestion"
import React, { useState } from "react"

type QuestionCardProps = {
  questionNumber: number,
  questionTitle: string,
  questionCorrectAnswer: string,
  questionIncorrectAnswers: string[],
  onSelectCorrectAnswer: () => void,
}

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionCorrectAnswer,
  questionIncorrectAnswers,
  onSelectCorrectAnswer
}: QuestionCardProps) {

  const [isAnswerClicked, setIsAnswerClicked] = useState<boolean>(false);

  const handleAnswerClick = () => {
    setIsAnswerClicked(!isAnswerClicked);
  }

  return (
    <div className="question-card bg-(--clr-gray-blue) py-6 px-4 rounded-lg
    w-full max-w-240">
      <div className="question-number text-(--clr-white) text-[1rem] mb-2">
        {`QUESTION ${questionNumber} OF 10`}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionTitle) }}
        className="question-title text-(--clr-white) text-[1.75rem]"
      />
      <div className="question-answers py-14 flex flex-col gap-6">
        {
          questionIncorrectAnswers.map((incorrectAnswer,) => (
            <p
              key={incorrectAnswer}
              onClick={handleAnswerClick}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(incorrectAnswer) }}
              className={`text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
              cursor-pointer ${isAnswerClicked ? `bg-(--clr-light-blue)` : `bg-transparent`}
              hover:bg-(--clr-light-blue) duration-75 ease-in-out`}
            />
          ))
        }
        <p
          onClick={onSelectCorrectAnswer}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionCorrectAnswer) }}
          className="text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
        cursor-pointer hover:bg-(--clr-light-blue) duration-75 ease-in-out">
        </p>
      </div>
      <ButtonNextQuestion className={`text-(--clr-white) text-[1.13rem] font-[600]
       py-1.5 px-4 w-full bg-(--clr-blue) rounded-full cursor-pointer 
       ${isAnswerClicked ? `inline-block` : `hidden`}`} />
    </div>
  )
}