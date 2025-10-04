import DOMPurify from "dompurify"
import ButtonNextQuestion from "./ui/ButtonNextQuestion"
import React, { useState } from "react"
import { X, Check } from "lucide-react"

type QuestionCardProps = {
  questionNumber: number,
  questionTitle: string,
  questionCorrectAnswer: string,
  questionIncorrectAnswers: string[],
  onSelectCorrectAnswer: (selectedAnswer: string, correctAnswer: string) => void;
}

export default function QuestionCard({
  questionNumber,
  questionTitle,
  questionCorrectAnswer,
  questionIncorrectAnswers,
  onSelectCorrectAnswer,
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
    onSelectCorrectAnswer(selectedAnswer, questionCorrectAnswer);
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
            <div
              key={index}
              className="incorrect-answer">
              <p
                data-index={index}
                onClick={handleAnswerClick}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(incorrectAnswer) }}
                className={`text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 
              rounded-xl cursor-pointer hover:bg-(--clr-light-blue) duration-75 
              ease-in-out ${isAnswerClicked ? `pointer-events-none` : `pointer-events-auto`}
              ${(activeIndex === index && isAnswerClicked) ? `bg-(--clr-red) border-(--clr-red) hover:bg-(--clr-red)` : `bg-transparent`}
              `}
              />
              <X color="#FFFFFF" />
            </div>
          ))
        }
        <div className="correct-answer">
          <p
            data-index={5}
            onClick={handleAnswerClick}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questionCorrectAnswer) }}
            className={`text-(--clr-white) text-[1.2rem] border-2 py-2 px-4 rounded-xl
          cursor-pointer duration-75 ease-in-out
          ${isAnswerClicked ? `bg-(--clr-green) border-(--clr-green) hover:bg-(--clr-green) pointer-events-none`
                : `bg-transparent hover:bg-(--clr-light-blue) pointer-events-auto`}`}>
          </p>
          <Check color="#FFFFFF" />
        </div>
      </div>
      <ButtonNextQuestion
        onClick={handleButtonNextClick}
        className={`text-(--clr-white) text-[1.13rem] font-[600]
       py-1.5 px-4 w-full bg-(--clr-blue) rounded-full cursor-pointer 
       ${isAnswerClicked ? `inline-block` : `hidden`}`} />
    </div>
  )
}