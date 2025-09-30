import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Quizrunz - Play and Win Rewards",
		template: "%s | Quizrunz",
	},
	description:
		"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizrunz.",
	keywords:
		"quiz, rewards, play, win, quizzes, knowledge, games, online quizzes",
	authors: [{ name: "Quizrunz" }],
	creator: "Quizrunz",
	openGraph: {
		title: "Quizrunz - Play and Win Rewards",
		description:
			"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizrunz.",
		url: "https://quizrunz.com",
		siteName: "Quizrunz",
		images: [
			{
				url: "https://quizrunz.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "Quizrunz Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: "https://quizrunz.com",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-0FM7J5XPEW'
				/>
				{/* ✅ Google Analytics */}
				{/* <script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'GOOGLE_ANALYTICS_ID', {
								'page_path': window.location.pathname,
							});
						`,
					}}
				/> */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-0FM7J5XPEW"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-0FM7J5XPEW');
					`}
				</Script>

				{/* ✅ Google AdSense */}
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2277180793314588"
     crossorigin="anonymous"></script>

				
				<meta name='application-name' content='Quizrunz' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='theme-color' content='#000000' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-300`}
				suppressHydrationWarning>
				<div className='min-h-screen bg-slate-900 max-w-md mx-auto relative'>
					{children}
				</div>
			</body>
		</html>
	);
}
