"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, TrendingUp, Award, Gift } from "lucide-react";

interface Transaction {
	id: number;
	type: "earned" | "spent";
	amount: number;
	description: string;
	date: string;
}

export default function WalletPage() {
	const [coins, setCoins] = useState(0);
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const router = useRouter();

	useEffect(() => {
		const savedCoins = localStorage.getItem("quizrunz-coins");
		setCoins(Number.parseInt(savedCoins || "0"));

		// Mock transaction history
		const mockTransactions: Transaction[] = [
			{
				id: 1,
				type: "earned",
				amount: 200,
				description: "Quiz Completion Bonus",
				date: new Date().toLocaleDateString(),
			},
			{
				id: 2,
				type: "earned",
				amount: 100,
				description: "Correct Answer Bonus",
				date: new Date().toLocaleDateString(),
			},
			{
				id: 3,
				type: "spent",
				amount: -100,
				description: "Quiz Entry Fee",
				date: new Date().toLocaleDateString(),
			},
		];
		setTransactions(mockTransactions);
	}, []);

	return (
		<div className='min-h-screen bg-slate-900 p-4'>
			<div className='max-w-md mx-auto'>
				{/* Header */}
				<div className='flex items-center gap-4 mb-6'>
					<button
						onClick={() => router.back()}
						className='p-2 hover:bg-slate-800 rounded-lg transition-colors'>
						<ArrowLeft className='w-6 h-6 text-slate-300' />
					</button>
					<h1 className='text-xl font-bold text-white'>My Wallet</h1>
				</div>

				{/* Balance Card */}
				<Card className='bg-gradient-to-r from-orange-400 to-yellow-500 border-0 mb-6'>
					<CardContent className='p-6 text-center'>
						<Coins className='w-12 h-12 text-slate-900 mx-auto mb-4' />
						<h2 className='text-2xl font-bold text-slate-900 mb-2'>
							Current Balance
						</h2>
						<p className='text-4xl font-bold text-slate-900'>
							{coins}
						</p>
						<p className='text-slate-800 mt-2'>Coins</p>
					</CardContent>
				</Card>

				{/* Stats Cards */}
				<div className='grid grid-cols-2 gap-4 mb-6'>
					<Card className='bg-slate-800 border-slate-700'>
						<CardContent className='p-4 text-center'>
							<TrendingUp className='w-8 h-8 text-green-400 mx-auto mb-2' />
							<p className='text-2xl font-bold text-white'>12</p>
							<p className='text-sm text-slate-400'>
								Quizzes Played
							</p>
						</CardContent>
					</Card>
					<Card className='bg-slate-800 border-slate-700'>
						<CardContent className='p-4 text-center'>
							<Award className='w-8 h-8 text-yellow-500 mx-auto mb-2' />
							<p className='text-2xl font-bold text-white'>85%</p>
							<p className='text-sm text-slate-400'>
								Avg Accuracy
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Recent Transactions */}
				<Card className='bg-slate-800 border-slate-700'>
					<CardHeader>
						<CardTitle className='text-white flex items-center gap-2'>
							<Gift className='w-5 h-5' />
							Recent Activity
						</CardTitle>
					</CardHeader>
					<CardContent className='p-4'>
						<div className='space-y-3'>
							{transactions.map((transaction) => (
								<div
									key={transaction.id}
									className='flex items-center justify-between p-3 bg-slate-700 rounded-lg'>
									<div>
										<p className='text-white font-medium'>
											{transaction.description}
										</p>
										<p className='text-sm text-slate-400'>
											{transaction.date}
										</p>
									</div>
									<div
										className={`font-bold ${
											transaction.type === "earned"
												? "text-green-400"
												: "text-red-400"
										}`}>
										{transaction.type === "earned"
											? "+"
											: ""}
										{transaction.amount}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Action Buttons */}
				<div className='mt-6 space-y-3'>
					<Button
						// onClick={() => router.push("/home")}
						onClick={() => router.push("/")}
						className='w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600'>
						Play More Quizzes
					</Button>
				</div>
			</div>
		</div>
	);
}
