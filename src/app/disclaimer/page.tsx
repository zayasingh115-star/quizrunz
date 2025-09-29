import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DisclaimerPage() {
	return (
		<div className='min-h-screen bg-slate-900 p-4'>
			<div className='max-w-2xl mx-auto'>
				{/* Header */}
				<div className='flex items-center gap-4 mb-6'>
					<Link
						href='/home'
						className='p-2 hover:bg-slate-800 rounded-lg transition-colors'>
						<ArrowLeft className='w-6 h-6 text-slate-300' />
					</Link>
					<h1 className='text-2xl font-bold text-white'>
						Disclaimer
					</h1>
				</div>

				<Card className='bg-slate-800 border-slate-700'>
					<CardHeader>
						<CardTitle className='text-orange-400'>
							Disclaimer
						</CardTitle>
						<p className='text-slate-400 text-sm'>
							Last updated: December 29, 2024
						</p>
					</CardHeader>
					<CardContent className='space-y-6 text-slate-300'>
						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								General Information
							</h3>
							<p>
								The information on Quizrunz is provided on an
								&quot;as is&quot; basis. To the fullest extent
								permitted by law, this Company excludes all
								representations, warranties, conditions and
								terms.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Educational Purpose
							</h3>
							<p>
								Quizrunz is designed for entertainment and
								educational purposes only. The quiz content is
								intended to be fun and informative but should
								not be considered as professional advice or
								authoritative information.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								No Real Monetary Value
							</h3>
							<p>
								The coins and rewards earned in Quizrunz have no
								real-world monetary value and cannot be:
							</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>Exchanged for real money</li>
								<li>Transferred to other users</li>
								<li>Redeemed for physical prizes</li>
								<li>Used outside of the Quizrunz platform</li>
							</ul>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Content Accuracy
							</h3>
							<p>
								While we strive to provide accurate and
								up-to-date information in our quizzes, we make
								no representations or warranties about:
							</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>
									The accuracy of quiz questions and answers
								</li>
								<li>
									The completeness of the information provided
								</li>
								<li>
									The suitability of content for any
									particular purpose
								</li>
							</ul>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Technical Issues
							</h3>
							<p>
								We are not responsible for any technical issues,
								including but not limited to:
							</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>Loss of progress due to browser issues</li>
								<li>Connectivity problems</li>
								<li>Device compatibility issues</li>
								<li>Data loss from clearing browser storage</li>
							</ul>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								External Links
							</h3>
							<p>
								Our service may contain links to external
								websites. We are not responsible for the
								content, privacy policies, or practices of any
								third-party websites.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Service Availability
							</h3>
							<p>
								We do not guarantee that Quizrunz will be
								available at all times. The service may be
								temporarily unavailable due to maintenance,
								updates, or technical issues.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Changes to Service
							</h3>
							<p>
								We reserve the right to modify, suspend, or
								discontinue any aspect of Quizrunz at any time
								without prior notice.
							</p>
						</section>

						<section>
							<h3 className='text-lg font-semibold text-white mb-2'>
								User Responsibility
							</h3>
							<p>Users are responsible for:</p>
							<ul className='list-disc list-inside space-y-1 mt-2'>
								<li>
									Using the service in accordance with
									applicable laws
								</li>
								<li>
									Maintaining the security of their device
								</li>
								<li>
									Understanding that quiz results are for
									entertainment only
								</li>
								<li>
									Not relying on quiz content for important
									decisions
								</li>
							</ul>
						</section>

						<div className='bg-gradient-to-r from-orange-400/20 to-yellow-500/20 p-4 rounded-lg border border-orange-500/30'>
							<p className='text-orange-300 font-medium'>
								By using Quizrunz, you acknowledge that you have
								read and understood this disclaimer.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
