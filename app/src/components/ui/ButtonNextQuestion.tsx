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
        className={className}
      >
        Next Question
      </button>
    </motion.div>
  )
}