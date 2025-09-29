"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Coins, ArrowLeft, Clock } from "lucide-react"

// Sample quiz questions - in a real app, this would come from an API
const quizQuestions = {
  1: [
    {
      question: "Which company was founded by Bill Gates?",
      options: ["Apple", "Microsoft", "Google", "Amazon"],
      correct: 1,
      funFact: "Microsoft was founded by Bill Gates and Paul Allen in 1975, starting the personal computer revolution.",
    },
    {
      question: "What does GDP stand for?",
      options: [
        "Gross Domestic Product",
        "General Data Protection",
        "Global Development Program",
        "Government Debt Policy",
      ],
      correct: 0,
      funFact: "GDP measures the total value of goods and services produced within a country's borders.",
    },
    {
      question: "Which company owns Instagram?",
      options: ["Twitter", "Google", "Meta (Facebook)", "Snapchat"],
      correct: 2,
      funFact: "Facebook (now Meta) acquired Instagram for $1 billion in 2012, one of the biggest tech acquisitions.",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Rupee"],
      correct: 2,
      funFact:
        "The Japanese Yen is one of the most traded currencies in the world and is considered a safe haven currency.",
    },
    {
      question: "Which company is known for the iPhone?",
      options: ["Samsung", "Apple", "Google", "Microsoft"],
      correct: 1,
      funFact: "Apple launched the first iPhone in 2007, revolutionizing the smartphone industry.",
    },
    {
      question: "What does CEO stand for?",
      options: [
        "Chief Executive Officer",
        "Central Executive Officer",
        "Corporate Executive Officer",
        "Chief Economic Officer",
      ],
      correct: 0,
      funFact:
        "The CEO is typically the highest-ranking executive in a company, responsible for major corporate decisions.",
    },
    {
      question: "Which company developed Android?",
      options: ["Apple", "Microsoft", "Google", "Samsung"],
      correct: 2,
      funFact: "Google acquired Android Inc. in 2005 and launched the first Android phone in 2008.",
    },
    {
      question: "What is the stock market index for the US?",
      options: ["FTSE", "Nikkei", "DAX", "S&P 500"],
      correct: 3,
      funFact: "The S&P 500 tracks 500 of the largest publicly traded companies in the United States.",
    },
    {
      question: "Which company owns LinkedIn?",
      options: ["Google", "Microsoft", "Facebook", "Twitter"],
      correct: 1,
      funFact: "Microsoft acquired LinkedIn for $26.2 billion in 2016, their largest acquisition at the time.",
    },
    {
      question: "What does IPO stand for?",
      options: [
        "Initial Public Offering",
        "International Public Offering",
        "Internal Public Offering",
        "Initial Private Offering",
      ],
      correct: 0,
      funFact: "An IPO is when a private company offers shares to the public for the first time on a stock exchange.",
    },
  ],
  2: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2,
      funFact:
        "Canberra was specially built to be Australia's capital city, chosen as a compromise between Sydney and Melbourne.",
    },
    {
      question: "Which country has the most time zones?",
      options: ["Russia", "USA", "China", "Canada"],
      correct: 0,
      funFact: "Russia spans 11 time zones, making it the country with the most time zones in the world.",
    },
    {
      question: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correct: 2,
      funFact: "Brasília was built from scratch in the 1950s to be Brazil's new capital, replacing Rio de Janeiro.",
    },
    {
      question: "Which city is known as the Big Apple?",
      options: ["Los Angeles", "Chicago", "New York", "Boston"],
      correct: 2,
      funFact: "New York City got the nickname 'Big Apple' from jazz musicians in the 1930s.",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1,
      funFact: "Vatican City is only 0.17 square miles (0.44 square kilometers) in area.",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct: 1,
      funFact: "The Nile River flows for about 4,135 miles (6,650 kilometers) through northeastern Africa.",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      correct: 1,
      funFact: "Mount Everest stands at 29,032 feet (8,849 meters) above sea level.",
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
      correct: 2,
      funFact:
        "Antarctica is technically the world's largest desert, as deserts are defined by low precipitation, not temperature.",
    },
    {
      question: "What is the most spoken language in the world?",
      options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
      correct: 1,
      funFact: "Mandarin Chinese is spoken by over 900 million people as their first language.",
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
      funFact:
        "The Pacific Ocean covers about 46% of the world's water surface and about one-third of the total surface area.",
    },
  ],
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const quizId = Number.parseInt(params.id as string)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  const questions = quizQuestions[quizId as keyof typeof quizQuestions] || quizQuestions[1]

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showResult) {
      handleAnswerSelect(-1) // Auto-submit with no answer
    }
  }, [timeLeft, timerActive, showResult])

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex)
      setShowResult(true)
      setTimerActive(false)

      setTimeout(() => {
        const newAnswers = [...answers, answerIndex]
        setAnswers(newAnswers)

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setShowResult(false)
          setTimeLeft(30)
          setTimerActive(true)
        } else {
          setQuizCompleted(true)
        }
      }, 2500)
    }
  }

  const handleQuizComplete = () => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length

    const baseReward = 200
    const bonusPerCorrect = 100
    const totalReward = baseReward + correctAnswers * bonusPerCorrect

    const currentCoins = Number.parseInt(localStorage.getItem("quizrunz-coins") || "0")
    localStorage.setItem("quizrunz-coins", (currentCoins + totalReward).toString())

    router.push("/home")
  }

  if (quizCompleted) {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length
    const baseReward = 200
    const bonusPerCorrect = 100
    const totalReward = baseReward + correctAnswers * bonusPerCorrect

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
        <Card className="w-full max-w-md bg-slate-800 border-slate-700">
          <CardContent className="p-8 text-center">
            <Coins className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h2>
            <p className="text-slate-300 mb-4">Great job on completing the quiz!</p>

            <div className="bg-slate-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-300 mb-2">Your Results:</p>
              <p className="text-lg font-semibold text-white">
                {correctAnswers}/{questions.length} Correct
              </p>
              <p className="text-sm text-slate-400">
                Accuracy: {Math.round((correctAnswers / questions.length) * 100)}%
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-4 mb-6">
              <p className="text-lg font-bold">+{totalReward} Coins</p>
              <p className="text-sm">
                Base: {baseReward} + Bonus: {correctAnswers * bonusPerCorrect}
              </p>
            </div>

            <Button
              onClick={handleQuizComplete}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600"
            >
              Collect Reward
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => router.back()} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6 text-slate-300" />
            </button>
            <div className="flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-full">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className={`font-semibold ${timeLeft <= 10 ? "text-red-400" : "text-orange-400"}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="text-center mb-6">
            <div className="inline-block bg-slate-700 px-4 py-2 rounded-full mb-4">
              <span className="text-white font-medium">
                {currentQuestion + 1}/{questions.length} Question
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-4 text-center">{question.question}</h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  showResult
                    ? index === question.correct
                      ? "bg-green-500/20 border-green-500 text-green-400"
                      : index === selectedAnswer && index !== question.correct
                        ? "bg-red-500/20 border-red-500 text-red-400"
                        : "bg-slate-700 border-slate-600 text-slate-300"
                    : "bg-slate-700 border-slate-600 text-slate-300 hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-left">{option}</span>
                  {showResult && index === question.correct && <CheckCircle className="w-4 h-4 text-green-400 ml-2" />}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle className="w-4 h-4 text-red-400 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Fun Fact */}
          {showResult && (
            <div className="bg-slate-700 rounded-lg p-4 mb-6">
              <h3 className="text-orange-400 font-semibold mb-2">#Fun Fact</h3>
              <p className="text-slate-300 text-sm">{question.funFact}</p>
            </div>
          )}

          {/* Result Feedback */}
          {showResult && (
            <div className="text-center">
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Correct! +100 coins</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span className="font-semibold">Incorrect! +0 coins</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
