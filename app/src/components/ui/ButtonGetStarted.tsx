import { motion } from "motion/react"

type ButtonGetStartedProps = {
  onClick: () => void
}

export default function ButtonGetStarted({ onClick }: ButtonGetStartedProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.92 }}
      className="get-started-button">
      <button
        id="getStartedButton"
        type="button"
        onClick={onClick}
        className="text-(--clr-white) text-[1.13rem] font-[600] py-2 px-4 
        w-full bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_140%)] 
        rounded-full cursor-pointer"
      >
        Let’s Get Started
      </button>
    </motion.div>
  )
}