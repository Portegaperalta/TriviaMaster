export default function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1 className="text-()">Trivia</h1>
        <h2>Master</h2>
      </div>
      <div className="home-description">
        <p className="text-(--clr-white)">
          Test your knowledge!
        </p>
        <p className="text-(--clr-white-opacity)">
          Challenge yourself with randomly generated quizzes
        </p>
      </div>
      <div className="get-started-btn">
        <button
          id="getStartedButton"
          type="button"
          className=""
        >
          Let’s Get Started
        </button>
      </div>
    </div>
  )
}