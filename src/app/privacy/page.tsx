import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-slate-900 p-4'>
			<div className='max-w-2xl mx-auto'>
				{/* Header */}
				<div className='flex items-center gap-4 mb-6'>
					<Link
						// href='/home'
						href='/start'
						className='p-2 hover:bg-slate-800 rounded-lg transition-colors'>
						<ArrowLeft className='w-6 h-6 text-slate-300' />
					</Link>
					<h1 className='text-2xl font-bold text-white'>
						Privacy Policy
					</h1>
				</div>

				<Card className='bg-slate-800 border-slate-700'>
					<CardHeader>
						<CardTitle className='text-orange-400'>
							Privacy Policy
						</CardTitle>
						<p className='text-slate-400 text-sm'>
							Last updated: December 29, 2024
						</p>
					</CardHeader>
					<CardContent className='space-y-6 text-slate-300'>
						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Information We Collect
							</h3>
							<p>
								Quizrunz is designed to work without requiring
								personal information. We only collect:
							</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>
									Quiz performance data (stored locally on
									your device)
								</li>
								<li>
									Coin balance (stored locally on your device)
								</li>
								<li>Basic usage analytics (anonymized)</li>
							</ul>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Local Storage
							</h3>
							<p>
								Your quiz progress and coin balance are stored
								locally in your browser&apos;s storage. This
								data:
							</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>Remains on your device only</li>
								<li>Is not transmitted to our servers</li>
								<li>
									Can be cleared by clearing your browser data
								</li>
								<li>Is not accessible to other websites</li>
							</ul>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Cookies
							</h3>
							<p>
								We may use cookies to enhance your experience,
								but no personal information is stored in these
								cookies.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Third-Party Services
							</h3>
							<p>
								We may use third-party analytics services to
								understand how our service is used. These
								services may collect anonymized usage data.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Data Security
							</h3>
							<p>
								Since we don&apos;t collect personal
								information, there&apos;s minimal risk to your
								privacy. All quiz data is stored locally on your
								device.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Children&apos;s Privacy
							</h3>
							<p>
								Our service is suitable for all ages. We do not
								knowingly collect personal information from
								children under 13.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Changes to Privacy Policy
							</h3>
							<p>
								We may update this privacy policy from time to
								time. We will notify you of any changes by
								posting the new policy on this page.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Contact Us
							</h3>
							<p>
								If you have any questions about this privacy
								policy, please contact us at
								support@quizrunz.com.
							</p>
						</section>

						<div className='bg-gradient-to-r from-orange-400/20 to-yellow-500/20 p-4 rounded-lg border border-orange-500/30'>
							<p className='text-orange-300 font-medium'>
								Your privacy is important to us. We&apos;re
								committed to protecting your data and providing
								a safe quiz experience.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
