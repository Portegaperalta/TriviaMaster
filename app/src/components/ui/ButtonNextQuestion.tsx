import { motion } from 'motion/react'

type ButtonNextQuestionProps = {
  className: string,
}

export default function ButtonNextQuestion({ className }: ButtonNextQuestionProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.92 }}
      className={className}>
      <button
        id="nexQuestionButton"
        type="button"
        className="text-(--clr-white) text-[1.13rem] font-[600] py-2 px-4 
        w-full bg-(--clr-blue) rounded-full cursor-pointer"
      >
        Next Question
      </button>
    </motion.div>
  )
}