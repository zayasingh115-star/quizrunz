"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";


const demoQuestions = [
	{
		id: 1,
		question:
			"Which actress won the Academy Award for Best Actress in 2020?",
		options: [
			"Renee Zellweger",
			"Scarlett Johansson",
			"Charlize Theron",
			"Natalie Portman",
		],
		correct: 0,
		funFact:
			"Renee Zellweger won for her role as Judy Garland in 'Judy', marking her second Academy Award win.",
	},
	{
		id: 2,
		question:
			"Who holds the record for most successful captain in IPL history?",
		options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Gautam Gambhir"],
		correct: 1,
		funFact:
			"MS Dhoni has led Chennai Super Kings to multiple IPL titles, making him the most successful captain in IPL history.",
	},
	{
		id: 3,
		question: "What is the capital of France?",
		options: ["Berlin", "Madrid", "Paris", "Rome"],
		correct: 2,
		funFact:
			"Paris is known as the 'City of Light' and is famous for its art, fashion, and culture.",
	},
	{
		id: 4,
		question: "Which planet is known as the Red Planet?",
		options: ["Earth", "Mars", "Jupiter", "Venus"],
		correct: 1,
		funFact:
			"Mars is called the Red Planet due to its reddish appearance, caused by iron oxide on its surface.",
	},
	{
		id: 5,
		question: "Who wrote the play 'Romeo and Juliet'?",
		options: [
			"William Shakespeare",
			"Charles Dickens",
			"Jane Austen",
			"Mark Twain",
		],
		correct: 0,
		funFact:
			"'Romeo and Juliet' is one of Shakespeare's most famous tragedies.",
	},
	{
		id: 6,
		question: "What is the largest mammal in the world?",
		options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
		correct: 1,
		funFact:
			"The blue whale can weigh up to 200 tons and is the largest animal ever known to have existed.",
	},
	{
		id: 7,
		question: "Which element has the chemical symbol 'O'?",
		options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
		correct: 1,
		funFact:
			"Oxygen is essential for respiration in most living organisms.",
	},
	{
		id: 8,
		question: "Who painted the Mona Lisa?",
		options: [
			"Vincent van Gogh",
			"Pablo Picasso",
			"Leonardo da Vinci",
			"Claude Monet",
		],
		correct: 2,
		funFact: "The Mona Lisa is displayed at the Louvre Museum in Paris.",
	},
	{
		id: 9,
		question: "What is the smallest prime number?",
		options: ["0", "1", "2", "3"],
		correct: 2,
		funFact: "2 is the only even prime number.",
	},
	{
		id: 10,
		question: "Which country is known as the Land of the Rising Sun?",
		options: ["China", "Japan", "Thailand", "South Korea"],
		correct: 1,
		funFact:
			"Japan is called the Land of the Rising Sun because the sun rises in the east, and Japan is east of China.",
	},
	{
		id: 11,
		question: "What is the boiling point of water at sea level?",
		options: ["90°C", "100°C", "110°C", "120°C"],
		correct: 1,
		funFact:
			"Water boils at 100°C (212°F) at standard atmospheric pressure.",
	},
	{
		id: 12,
		question: "Who is known as the Father of Computers?",
		options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
		correct: 1,
		funFact:
			"Charles Babbage designed the first mechanical computer, the Analytical Engine.",
	},
];

function getRandomQuestions(arr: typeof demoQuestions, n: number) {
	const shuffled = arr.slice().sort(() => 0.5 - Math.random());
	return shuffled.slice(0, n);
}

export default function WelcomePage() {
	const [randomQuestions, setRandomQuestions] = useState(
		demoQuestions.slice(0, 2)
	);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [answers, setAnswers] = useState<number[]>([]);
	const [showReward, setShowReward] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setRandomQuestions(getRandomQuestions(demoQuestions, 2));
	}, []);

	const handleAnswerSelect = (answerIndex: number) => {
		if (!showResult) {
			setSelectedAnswer(answerIndex);
			setShowResult(true);

			setTimeout(() => {
				const newAnswers = [...answers, answerIndex];
				setAnswers(newAnswers);

				if (currentQuestion < randomQuestions.length - 1) {
					setCurrentQuestion(currentQuestion + 1);
					setSelectedAnswer(null);
					setShowResult(false);
				} else {
					// Calculate reward
					const correctAnswers = newAnswers.filter(
						(answer, index) =>
							answer === randomQuestions[index].correct
					).length;
					const reward = correctAnswers * 100 + 100;

					// Save initial coins
					const currentCoins = Number.parseInt(
						localStorage.getItem("quizrunz-coins") || "0"
					);
					localStorage.setItem(
						"quizrunz-coins",
						(currentCoins + reward).toString()
					);

					setShowReward(true);
				}
			}, 2000);
		}
	};

	const handleContinue = () => {
		router.push("/result");
	};

	if (showReward) {
		const correctAnswers = answers.filter(
			(answer, index) => answer === randomQuestions[index].correct
		).length;
		const reward = correctAnswers * 100 + 100;
		console.log(reward);

		return (
			<div className='min-h-screen flex items-center justify-center p-4 bg-slate-900'>
				<Card className='w-full max-w-md bg-slate-800 border-slate-700'>
					<CardContent className='p-8 text-center'>
						<div className='mb-6'>
							<img
								src='/coin.png'
								className='w-20 h-20 animate-pulse mx-auto mb-4'
								alt='coin'
							/>
							<h2 className='text-2xl font-bold text-white mb-2'>
								New Reward Available!
							</h2>
							{/* <div className='bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-4 mb-4'> */}
							<div className='bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-4 mb-4'>
								<p className='text-2xl font-bold'>
									Get Instant 100 Coins!
								</p>
							</div>
							{/* <div
								// style={{ background: 'linear-gradient(to right, #8593ec, #6779e8, #000000)' }}
								// style={{ background: 'linear-gradient(to top, #8593ec, #6779e8, #000000)' }}
								// style={{ background: 'linear-gradient(135deg, #8593ec, #6779e8, #000000)' }}
								style={{ background: 'linear-gradient(circle, #8593ec, #6779e8, #000000)' }}
								className='text-slate-900 rounded-lg p-4 mb-4'
							>
								<p className='text-2xl font-bold'>
									Get Instant 100 Coins!
								</p>
							</div> */}

						</div>
						<p className='text-slate-400 mb-4'>
							Watch a simple add get rewarded
						</p>
						<Button
							onClick={handleContinue}
							className='w-full bg-gradient-to-r from-orange-400 to-yellow-500 cursor-pointer text-slate-900 hover:from-orange-500 hover:to-yellow-600'>
							Claim
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

	const question = randomQuestions[currentQuestion];
	const isCorrect = selectedAnswer === question.correct;

	return (
		<div className='min-h-screen flex items-center justify-center p-4 bg-slate-900'>
			<Card className='w-full max-w-md bg-slate-800 border-slate-700'>
				<CardContent className='p-6'>
					{/* Header */}
					<div className='text-center mb-6'>
						<h1 className='text-2xl font-bold text-white mb-2'>
							Quick Start
						</h1>
						<p className='text-slate-300 mb-4'>
							Answer 2 questions and win upto 200 coins.
						</p>
						<div className='inline-block bg-slate-700 px-4 py-2 rounded-full'>
							<span className='text-white font-medium'>
								{currentQuestion + 1}/2 Question
							</span>
						</div>
					</div>

					{/* Question */}
					<div className='mb-6'>
						<h2 className='text-lg font-semibold text-white mb-4 text-center'>
							{question.question}
						</h2>
					</div>

					{/* Options */}
					<div className='grid grid-cols-2 gap-3 mb-6'>
						{question.options.map((option, index) => (
							<button
								key={index}
								onClick={() => handleAnswerSelect(index)}
								disabled={showResult}
								className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${showResult
										? index === question.correct
											? "bg-green-500/20 border-green-500 text-green-400"
											: index === selectedAnswer &&
												index !== question.correct
												? "bg-red-500/20 border-red-500 text-red-400"
												: "bg-slate-700 border-slate-600 text-slate-300"
										: "bg-slate-700 border-slate-600 text-slate-300 hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
									}`}>
								{option}
							</button>
						))}
					</div>

					{/* Fun Fact */}
					{showResult && (
						<div className='bg-slate-700 rounded-lg p-4 mb-6'>
							<h3 className='text-orange-400 font-semibold mb-2'>
								#Fun Fact
							</h3>
							<p className='text-slate-300 text-sm'>
								{question.funFact}
							</p>
						</div>
					)}

					{/* Info Section - Only show on first question */}
					{currentQuestion === 0 && !showResult && (
						<div className='bg-slate-700 rounded-lg p-4'>
							<h3 className='text-white font-bold text-center mb-3'>
								Play Quiz and Win Coins!
							</h3>
							<ul className='text-slate-300 text-sm space-y-2'>
								<li className='flex items-start gap-2'>
									<span className='text-orange-400'>•</span>
									<span>
										Play Quizzes in 25+ categories like GK,
										Sports, Bollywood, Business, Cricket &
										more!
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='text-orange-400'>•</span>
									<span>
										Compete with lakhs of other players!
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='text-orange-400'>•</span>
									<span>Win coins for every game</span>
								</li>
								<li className='flex items-start gap-2'>
									<span className='text-orange-400'>•</span>
									<span>
										Trusted by millions of other quiz
										enthusiasts like YOU!
									</span>
								</li>
							</ul>
						</div>
					)}

					{/* Result Feedback */}
					{showResult && (
						<div className='text-center'>
							{isCorrect ? (
								<div className='flex items-center justify-center gap-2 text-green-400'>
									<CheckCircle className='w-5 h-5' />
									<span className='font-semibold'>
										Correct! +100 coins
									</span>
								</div>
							) : (
								<div className='flex items-center justify-center gap-2 text-red-400'>
									<XCircle className='w-5 h-5' />
									<span className='font-semibold'>
										Incorrect! +0 coins
									</span>
								</div>
							)}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
