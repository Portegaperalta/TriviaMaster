import { motion } from 'motion/react'

type ButtonNextQuestionProps = {
  onClick: () => void,
  className: string,
}

export default function ButtonNextQuestion({ className, onClick }: ButtonNextQuestionProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.92 }}
      className={className}>
      <button
        id="nexQuestionButton"
        type="button"
        onClick={onClick}
        className={className}
      >
        Next Question
      </button>
    </motion.div>
  )
}