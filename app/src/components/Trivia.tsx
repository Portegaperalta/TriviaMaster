
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
  return (
    <div className="trivia">

    </div>
  )
}