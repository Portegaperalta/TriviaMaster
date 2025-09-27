import ButtonGetStarted from "./ui/ButtonGetStarted";

export default function Home() {
  return (
    <div className="home text-center space-y-6 px-2">
      <div className="home-title flex flex-col text-[4rem]/14">
        <h1 className="text-transparent font-[800] bg-clip-text 
        bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_100%)]">
          Trivia
        </h1>
        <h2 className="text-transparent font-[800] bg-clip-text
        bg-[radial-gradient(at_0%_0%,_var(--clr-purple-gradient),_var(--clr-blue-gradient)_100%)]">
          Master
        </h2>
      </div>
      <div className="home-description space-y-4">
        <p className="text-(--clr-white) text-[1.8rem] font-[600]">
          Test your knowledge!
        </p>
        <p className="text-(--clr-white-opacity) text-[1.13rem] font-[600]">
          Challenge yourself with randomly generated quizzes
        </p>
      </div>
      <ButtonGetStarted />
    </div>
  )
}