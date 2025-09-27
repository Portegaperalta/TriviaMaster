export default function ButtonGetStarted() {
  return (
    <div className="get-started-button">
      <button
        id="getStartedButton"
        type="button"
        className="text-(--clr-white) text-[1.13rem] font-[600] py-2 px-4 
        w-full bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_120%)] 
        rounded-full"
      >
        Let’s Get Started
      </button>
    </div>
  )
}