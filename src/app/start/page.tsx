"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
	Menu,
	Coins,
	Play,
	X,
	Home,
	Trophy,
	History,
	BookOpen,
	MessageCircle,
	AlertTriangle,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AdModal from "@/components/ad-modal";

const categories = [
	"ALL",
	"SPORTS",
	"WORLD",
	"MATH AND LOGIC",
	"ENTERTAINMENT",
	"SCIENCE",
	"HISTORY",
	"BUSINESS",
];

const quizzes = [
	{
		id: 1,
		title: "Business And Economics | Companies",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "BUSINESS AND ECONOMICS",
		icon: "📊",
	},
	{
		id: 2,
		title: "Travel | World Capitals",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "GEOGRAPHY",
		icon: "🌍",
	},
	{
		id: 3,
		title: "Math And Logic | Puzzles",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "MATHEMATICS",
		icon: "🧮",
	},
	{
		id: 4,
		title: "Sports | Football",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "SPORTS",
		icon: "⚽",
	},
	{
		id: 5,
		title: "Math And Logic | Logical Reasoning",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "MATHEMATICS",
		icon: "🧠",
	},
	{
		id: 6,
		title: "Travel | Tourist Attractions",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "GEOGRAPHY",
		icon: "🗺️",
	},
	{
		id: 7,
		title: "Math And Logic | Algebra",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "MATHEMATICS",
		icon: "📐",
	},
	{
		id: 8,
		title: "World | Famous Landmarks",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "GEOGRAPHY",
		icon: "🏛️",
	},
	{
		id: 9,
		title: "Science | Physics Basics",
		subtitle: "Play and Win 1500",
		entryFee: 75,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "⚛️",
	},
	{
		id: 10,
		title: "Entertainment | Movies",
		subtitle: "Play and Win 1800",
		entryFee: 90,
		category: "ENTERTAINMENT",
		icon: "🎬",
	},
	{
		id: 11,
		title: "History | Ancient Civilizations",
		subtitle: "Play and Win 2200",
		entryFee: 110,
		category: "HISTORY",
		icon: "🏺",
	},
	{
		id: 12,
		title: "Sports | Basketball",
		subtitle: "Play and Win 1600",
		entryFee: 80,
		category: "SPORTS",
		icon: "🏀",
	},
	{
		id: 13,
		title: "Technology | Programming",
		subtitle: "Play and Win 2500",
		entryFee: 125,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "💻",
	},
	{
		id: 14,
		title: "Literature | Classic Novels",
		subtitle: "Play and Win 1400",
		entryFee: 70,
		category: "LITERATURE",
		icon: "📚",
	},
	{
		id: 15,
		title: "Geography | Countries & Flags",
		subtitle: "Play and Win 1700",
		entryFee: 85,
		category: "GEOGRAPHY",
		icon: "🏳️",
	},
	{
		id: 16,
		title: "Business | Marketing Basics",
		subtitle: "Play and Win 1900",
		entryFee: 95,
		category: "BUSINESS AND ECONOMICS",
		icon: "📈",
	},
	{
		id: 17,
		title: "Science | Chemistry",
		subtitle: "Play and Win 2100",
		entryFee: 105,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🧪",
	},
	{
		id: 18,
		title: "Entertainment | Music",
		subtitle: "Play and Win 1300",
		entryFee: 65,
		category: "ENTERTAINMENT",
		icon: "🎵",
	},
	{
		id: 19,
		title: "History | World Wars",
		subtitle: "Play and Win 2300",
		entryFee: 115,
		category: "HISTORY",
		icon: "⚔️",
	},
	{
		id: 20,
		title: "Sports | Tennis",
		subtitle: "Play and Win 1500",
		entryFee: 75,
		category: "SPORTS",
		icon: "🎾",
	},
	{
		id: 21,
		title: "Math | Geometry",
		subtitle: "Play and Win 1800",
		entryFee: 90,
		category: "MATHEMATICS",
		icon: "📏",
	},
	{
		id: 22,
		title: "Technology | AI & Machine Learning",
		subtitle: "Play and Win 2800",
		entryFee: 140,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🤖",
	},
	{
		id: 23,
		title: "Literature | Poetry",
		subtitle: "Play and Win 1200",
		entryFee: 60,
		category: "LITERATURE",
		icon: "📝",
	},
	{
		id: 24,
		title: "Geography | Oceans & Seas",
		subtitle: "Play and Win 1600",
		entryFee: 80,
		category: "GEOGRAPHY",
		icon: "🌊",
	},
	{
		id: 25,
		title: "Business | Finance",
		subtitle: "Play and Win 2400",
		entryFee: 120,
		category: "BUSINESS AND ECONOMICS",
		icon: "💰",
	},
	{
		id: 26,
		title: "Science | Biology",
		subtitle: "Play and Win 1900",
		entryFee: 95,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🔬",
	},
	{
		id: 27,
		title: "Entertainment | TV Shows",
		subtitle: "Play and Win 1400",
		entryFee: 70,
		category: "ENTERTAINMENT",
		icon: "📺",
	},
	{
		id: 28,
		title: "History | Renaissance",
		subtitle: "Play and Win 2000",
		entryFee: 100,
		category: "HISTORY",
		icon: "🎨",
	},
	{
		id: 29,
		title: "Sports | Olympics",
		subtitle: "Play and Win 2200",
		entryFee: 110,
		category: "SPORTS",
		icon: "🏅",
	},
	{
		id: 30,
		title: "Math | Statistics",
		subtitle: "Play and Win 1700",
		entryFee: 85,
		category: "MATHEMATICS",
		icon: "📊",
	},
	{
		id: 31,
		title: "Technology | Web Development",
		subtitle: "Play and Win 2600",
		entryFee: 130,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🌐",
	},
	{
		id: 32,
		title: "Literature | Shakespeare",
		subtitle: "Play and Win 1800",
		entryFee: 90,
		category: "LITERATURE",
		icon: "🎭",
	},
	{
		id: 33,
		title: "Geography | Mountains",
		subtitle: "Play and Win 1500",
		entryFee: 75,
		category: "GEOGRAPHY",
		icon: "⛰️",
	},
	{
		id: 34,
		title: "Business | Entrepreneurship",
		subtitle: "Play and Win 2100",
		entryFee: 105,
		category: "BUSINESS AND ECONOMICS",
		icon: "🚀",
	},
	{
		id: 35,
		title: "Science | Astronomy",
		subtitle: "Play and Win 2300",
		entryFee: 115,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🌟",
	},
	{
		id: 36,
		title: "Entertainment | Gaming",
		subtitle: "Play and Win 1600",
		entryFee: 80,
		category: "ENTERTAINMENT",
		icon: "🎮",
	},
	{
		id: 37,
		title: "History | Medieval Times",
		subtitle: "Play and Win 1900",
		entryFee: 95,
		category: "HISTORY",
		icon: "🏰",
	},
	{
		id: 38,
		title: "Sports | Cricket",
		subtitle: "Play and Win 1700",
		entryFee: 85,
		category: "SPORTS",
		icon: "🏏",
	},
	{
		id: 39,
		title: "Math | Calculus",
		subtitle: "Play and Win 2500",
		entryFee: 125,
		category: "MATHEMATICS",
		icon: "∫",
	},
	{
		id: 40,
		title: "Technology | Cybersecurity",
		subtitle: "Play and Win 2700",
		entryFee: 135,
		category: "SCIENCE AND TECHNOLOGY",
		icon: "🔒",
	},
	{
		id: 41,
		title: "Literature | Modern Fiction",
		subtitle: "Play and Win 1300",
		entryFee: 65,
		category: "LITERATURE",
		icon: "📖",
	},
	{
		id: 42,
		title: "Geography | Climate & Weather",
		subtitle: "Play and Win 1800",
		entryFee: 90,
		category: "GEOGRAPHY",
		icon: "🌤️",
	},
];

export default function HomePage() {
	const [selectedCategory, setSelectedCategory] = useState("ALL");
	const [coins, setCoins] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const [showAdModal, setShowAdModal] = useState(false);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const savedCoins = localStorage.getItem("quizrunz-coins");
		setCoins(Number.parseInt(savedCoins || "0"));
	}, []);

	const filteredQuizzes =
		selectedCategory === "ALL"
			? quizzes
			: quizzes.filter((quiz) => quiz.category === selectedCategory);

	const handleQuizStart = (quizId: number, entryFee: number) => {
		if (coins >= entryFee) {
			const newCoins = coins - entryFee;
			setCoins(newCoins);
			localStorage.setItem("quizrunz-coins", newCoins.toString());
			router.push(`/quiz/${quizId}`);
		} else {
			setShowAdModal(true);
		}
	};

	const handleAdComplete = () => {
		const newCoins = coins + 100;
		setCoins(newCoins);
		localStorage.setItem("quizrunz-coins", newCoins.toString());
	};

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -200,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: 200,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className='min-h-screen bg-slate-900'>
			{/* Header */}
			<header className='sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'>
				<div className='flex items-center justify-between p-4'>
					<button
						onClick={() => setShowMenu(!showMenu)}
						className='p-2 hover:bg-slate-800 rounded-lg transition-colors'>
						<Menu className='w-6 h-6 text-slate-300' />
					</button>

					<h1 className='text-xl font-bold text-orange-400'>
						Quizrunz
					</h1>

					<div className='flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-full'>
						<Coins className='w-5 h-5 text-yellow-500' />
						<span className='text-yellow-500 font-semibold'>
							{coins}
						</span>
					</div>
				</div>
			</header>

			{/* Slide-out Menu */}
			{showMenu && (
				<>
					<div
						className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
						onClick={() => setShowMenu(false)}
					/>
					<div className='fixed top-0 right-0 z-50 h-full w-80 bg-slate-800 shadow-2xl transform transition-transform duration-300'>
						<div className='p-4'>
							{/* Header */}
							<div className='flex items-center justify-between mb-6'>
								<div className='flex items-center gap-3'>
									<div className='w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center'>
										<span className='text-xl'>👤</span>
									</div>
									<div>
										<h3 className='text-white font-semibold'>
											Guest
										</h3>
										<p className='text-orange-400 text-sm'>
											Play Quiz & earn coins
										</p>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<div className='flex items-center gap-1 bg-slate-700 px-2 py-1 rounded-full'>
										<Coins className='w-4 h-4 text-yellow-500' />
										<span className='text-yellow-500 text-sm font-semibold'>
											{coins}
										</span>
									</div>
									<button
										onClick={() => setShowMenu(false)}
										className='p-1 hover:bg-slate-700 rounded-full transition-colors'>
										<X className='w-5 h-5 text-slate-400' />
									</button>
								</div>
							</div>

							{/* Menu Items */}
							<nav className='space-y-2'>
								<Link
									href='/start'
									className='flex items-center justify-between p-3 bg-orange-500 text-slate-900 rounded-lg font-medium'>
									<div className='flex items-center gap-3'>
										<Home className='w-5 h-5' />
										<span>Start</span>
									</div>
								</Link>

								<Link
									href='/wallet'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<Trophy className='w-5 h-5' />
										<span>Wallet</span>
									</div>
									<div className='w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center'>
										<Play
											className='w-4 h-4 text-slate-900'
											fill='currentColor'
										/>
									</div>
								</Link>

								<Link
									href='/contact'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<History className='w-5 h-5' />
										<span>Contact Us</span>
									</div>
									<div className='w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center'>
										<Play
											className='w-4 h-4 text-slate-900'
											fill='currentColor'
										/>
									</div>
								</Link>

								<Link
									href='/disclaimer'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<BookOpen className='w-5 h-5' />
										<span>Disclaimer</span>
									</div>
									<div className='w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center'>
										<Play
											className='w-4 h-4 text-slate-900'
											fill='currentColor'
										/>
									</div>
								</Link>

								<Link
									href='/about'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<MessageCircle className='w-5 h-5' />
										<span>About Us</span>
									</div>
									<div className='w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center'>
										<Play
											className='w-4 h-4 text-slate-900'
											fill='currentColor'
										/>
									</div>
								</Link>

								<Link
									href='/privacy'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<AlertTriangle className='w-5 h-5' />
										<span>Privacy Policy</span>
									</div>
								</Link>
								<Link
									href='/terms'
									className='flex items-center justify-between p-3 text-white hover:bg-slate-700 rounded-lg transition-colors'>
									<div className='flex items-center gap-3'>
										<AlertTriangle className='w-5 h-5' />
										<span>Terms & Conditions</span>
									</div>
								</Link>
							</nav>
						</div>
					</div>
				</>
			)}

			{/* Category Filter */}
			<div className='p-4'>
				<div className='relative'>
					{/* Left Arrow */}
					<button
						onClick={scrollLeft}
						className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors shadow-lg'>
						<ChevronLeft className='w-5 h-5' />
					</button>

					{/* Right Arrow */}
					<button
						onClick={scrollRight}
						className='absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors shadow-lg'>
						<ChevronRight className='w-5 h-5' />
					</button>

					{/* Scrollable Container */}
					<div
						ref={scrollContainerRef}
						className='flex gap-3 overflow-x-auto text-sm pb-2 px-10 category-scroll-container'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`category-chip whitespace-nowrap ${
									selectedCategory === category
										? "active"
										: ""
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Quiz Cards */}
			<div className='px-4 pb-4 space-y-3'>
				{filteredQuizzes.map((quiz) => (
					<div
						key={quiz.id}
						className='bg-slate-800 rounded-2xl p-4 border border-slate-700'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-3 flex-1'>
								<div className='text-5xl'>{quiz.icon}</div>
								<div className='flex-1'>
									<p className='text-xs text-slate-400 mb-1'>
										{quiz.category}
									</p>
									<h3 className='font-semibold text-white text-sm mb-1'>
										{quiz.title}
									</h3>
									<p className='text-orange-400 text-sm font-medium mb-2'>
										{quiz.subtitle}
									</p>
									<div className='flex items-center gap-1'>
										<span className='text-xs text-slate-400'>
											Entry Fee
										</span>
										<Coins className='w-3 h-3 text-yellow-500' />
										<span className='text-xs text-yellow-500 font-medium'>
											{quiz.entryFee}
										</span>
									</div>
								</div>
							</div>
							<button
								onClick={() =>
									handleQuizStart(quiz.id, quiz.entryFee)
								}
								className='bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-full p-4 hover:from-orange-500 hover:to-yellow-600 transition-all duration-200 shadow-lg'>
								<Play className='w-6 h-6' fill='currentColor' />
							</button>
						</div>
					</div>
				))}
			</div>
			<AdModal
				isOpen={showAdModal}
				onClose={() => setShowAdModal(false)}
				onAdComplete={handleAdComplete}
			/>
		</div>
	);
}
