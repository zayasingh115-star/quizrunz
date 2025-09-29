import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
<head>
				{/* Search Console Verification */}
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
					`,
					}}
				/>

				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=2277180793314588'
					crossOrigin='anonymous'></script>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<Header />
					{children}
					<Footer />
					<Toaster position='bottom-right' />
				</ThemeProvider>
			</body>
		</html>
	);
}

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
	title: {
		template: '%s | Video Downloader Pro',
		default: 'Video Downloader Pro - Download Videos from Multiple Platforms'
	},
	description: 'Free online video downloader supporting multiple platforms. Download videos from YouTube, Facebook, Instagram, and more in high quality.',
	generator: 'Next.js',
	applicationName: 'Video Downloader Pro',
	keywords: ['video downloader', 'youtube downloader', 'online video download', 'free video downloader', 'social media video download'],
	authors: [{ name: 'Video Downloader Pro Team' }],
	canonical: 'https://your-domain.com',
	robotsContent: 'index, follow',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://your-domain.com',
		site_name: 'Video Downloader Pro',
		title: 'Video Downloader Pro - Download Videos from Multiple Platforms',
		description: 'Free online video downloader supporting multiple platforms. Download videos from YouTube, Facebook, Instagram, and more in high quality.',
		images: [{
			url: '/og-image.jpg',
			width: 1200,
			height: 630,
			alt: 'Video Downloader Pro'
		}]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Video Downloader Pro - Download Videos from Multiple Platforms',
		description: 'Free online video downloader supporting multiple platforms. Download videos from YouTube, Facebook, Instagram, and more in high quality.',
		images: ['/og-image.jpg'],
		creator: '@videodownloaderpro'
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code'
	}
};
