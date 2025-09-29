// import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
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
						Contact Us
					</h1>
				</div>

				<Card className='bg-slate-800 border-slate-700'>
					<CardHeader>
						<CardTitle className='text-orange-400'>
							Get in Touch
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-6 text-slate-300'>
						<p>
							Have questions, feedback, or need support? We&apos;d
							love to hear from you! Reach out to us through any
							of the following channels:
						</p>

						<div className='space-y-4'>
							<div className='flex items-center gap-3 p-4 bg-slate-700 rounded-lg'>
								<Mail className='w-6 h-6 text-orange-400' />
								<div>
									<h3 className='font-semibold text-white'>
										Email
									</h3>
									<p className='text-slate-300'>
										support@quizrunz.com
									</p>
								</div>
							</div>

							{/* <div className='flex items-center gap-3 p-4 bg-slate-700 rounded-lg'>
								<Phone className='w-6 h-6 text-orange-400' />
								<div>
									<h3 className='font-semibold text-white'>
										Phone
									</h3>
									<p className='text-slate-300'>
										+1 (555) 123-4567
									</p>
								</div>
							</div> */}

							{/* <div className='flex items-center gap-3 p-4 bg-slate-700 rounded-lg'>
								<MapPin className='w-6 h-6 text-orange-400' />
								<div>
									<h3 className='font-semibold text-white'>
										Address
									</h3>
									<p className='text-slate-300'>
										123 Quiz Street
										<br />
										Knowledge City, KC 12345
										<br />
										United States
									</p>
								</div>
							</div> */}
						</div>

						<div className='bg-slate-700 p-4 rounded-lg'>
							<h3 className='font-semibold text-white mb-2'>
								Business Hours
							</h3>
							<div className='space-y-1 text-sm'>
								<p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
								<p>Saturday: 10:00 AM - 4:00 PM IST</p>
								<p>Sunday: Closed</p>
							</div>
						</div>

						<div className='bg-gradient-to-r from-orange-400/20 to-yellow-500/20 p-4 rounded-lg border border-orange-500/30'>
							<p className='text-orange-300 font-medium'>
								We typically respond to all inquiries within 24
								hours during business days.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
