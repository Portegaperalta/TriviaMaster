import DOMPurify from "dompurify"
import ButtonNextQuestion from "./ui/ButtonNextQuestion"
import React, { useEffect, useState } from "react"
import saveToSessionStorage from "../utils/saveToSessionStorage";

type QuestionCardProps = {
  questionNumber: number,
  questionTitle: string,
  questionCorrectAnswer: string,
  questionIncorrectAnswers: string[],
}

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionCorrectAnswer,
  questionIncorrectAnswers,
}: QuestionCardProps) {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnswerClicked, setIsAnswerClicked] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleAnswerClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setIsAnswerClicked(true);
    // turns the retrieved data-index attribute to a number
    setActiveIndex(Number(e.currentTarget.getAttribute('data-index')));
    // updates selectedAnswer state to the element inner text
    setSelectedAnswer(e.currentTarget.innerText);
  }

  const handleButtonNextClick = async () => {
    if (selectedAnswer != '') {
      saveToSessionStorage(`isQuestion${questionNumber}Answered`, JSON.stringify(true));
    }
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
          questionIncorrectAnswers.map((incorrectAnswer, index) => (
            <p
              key={incorrectAnswer}
              data-index={index}
              onClick={handleAnswerClick}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(incorrectAnswer) }}
              className={`text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
              cursor-pointer ${activeIndex === index ? `bg-(--clr-light-blue)` : `bg-transparent`}
              hover:bg-(--clr-light-blue) duration-75 ease-in-out`}
            />
          ))
        }
        <p
          data-index={5}
          onClick={handleAnswerClick}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionCorrectAnswer) }}
          className={`text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
          cursor-pointer ${activeIndex === 5 ? `bg-(--clr-light-blue)` : `bg-transparent`} 
          hover:bg-(--clr-light-blue) duration-75 ease-in-out`}>
        </p>
      </div>
      <ButtonNextQuestion
        onClick={handleButtonNextClick}
        className={`text-(--clr-white) text-[1.13rem] font-[600]
       py-1.5 px-4 w-full bg-(--clr-blue) rounded-full cursor-pointer 
       ${isAnswerClicked ? `inline-block` : `hidden`}`} />
    </div>
  )
}