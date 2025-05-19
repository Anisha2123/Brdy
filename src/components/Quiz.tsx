import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const questions = [
  {
    q: "What's Anshuman’s favorite way to celebrate?",
    a: ["With family", "Food", "With Friends", "Party"],
    correct: 0,
  },
  {
    q: "What's his birthday month?",
    a: ["January", "May", "August", "December"],
    correct: 1,
  },
  {
    q: "What's Anshuman’s go-to comfort food?",
    a: ["Kaluji", "ChandBhog", "Chokha", "Ice Cream"],
    correct: 0,
  },
  {
    q: "Which superpower would Anshuman most want?",
    a: ["Invisibility", "Reading Minds", "Time Travel", "Flying"],
    correct: 2,
  },
  {
    q: "What’s Anshuman’s favorite movie genre?",
    a: ["Romance", "Comedy", "Thriller", "Sci-Fi"],
    correct: 0,
  },
  {
    q: "What’s a perfect weekend for Anshuman?",
    a: ["Hiking", "Gaming", "Sleeping", "Road Trip"],
    correct: 2,
  },
  {
    q: "Which color does Anshuman vibe with most?",
    a: ["Black", "Blue", "Red", "White"],
    correct: 3,
  },
  {
    q: "Who’s most likely to make Anshuman laugh the hardest?",
    a: ["His friends", "A funny meme", "Stand-up Comedy", "Himself"],
    correct: 0,
  },
  {
    q: "What’s Anshuman’s dream travel destination?",
    a: ["Switzerland", "Japan", "Paris", "Maldives"],
    correct: 3,
  },
  {
    q: "What describes Anshuman best?",
    a: ["Creative", "Calm", "Charming", "Chaotic Good"],
    correct: 1,
  },
];

// Final emoji based on score percentage
const getFinalEmoji = (score: number, total: number) => {
  const percent = (score / total) * 100;
  if (percent >= 80) return "😎 Awesome!";
  if (percent >= 50) return "🫤 Not bad!";
  return "🥲 Better luck next time!";
};

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [feedbackEmoji, setFeedbackEmoji] = useState<string | null>(null);
  const [disableButtons, setDisableButtons] = useState(false);

  // Sounds
  const correctSound = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
  );
  const wrongSound = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"
  );

  useEffect(() => {
    if (done) {
      // Fire confetti for 2 seconds
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          particleCount,
          spread: 70,
          origin: { y: 0.6 },
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [done]);

  const handleAnswer = (i: number) => {
    setDisableButtons(true);
    const isCorrect = i === questions[index].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedbackEmoji("🎉 Correct!");
      correctSound.play();
    } else {
      setFeedbackEmoji("😢 Oops!");
      wrongSound.play();
    }

    setTimeout(() => {
      setFeedbackEmoji(null);
      setDisableButtons(false);
      if (index + 1 < questions.length) {
        setIndex((prev) => prev + 1);
      } else {
        setDone(true);
      }
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-yellow-100 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">🧠 Birthday Quiz</h2>

      {!done ? (
        <>
          <p className="text-lg mb-6">{questions[index].q}</p>
          {questions[index].a.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={disableButtons}
              className={`block w-full py-2 my-2 rounded-lg border transition ${
                disableButtons
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-yellow-200"
              }`}
            >
              {opt}
            </button>
          ))}

          {feedbackEmoji && (
            <div className="mt-4 text-2xl font-bold">{feedbackEmoji}</div>
          )}
        </>
      ) : (
        <div className="text-xl font-semibold text-green-700">
          🎉 You scored {score}/{questions.length}! <br />
          <span className="text-5xl mt-2 block">{getFinalEmoji(score, questions.length)}</span>
        </div>
      )}
    </div>
  );
};

export default Quiz;
