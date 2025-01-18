import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import { Header } from ' @/components/shared/shared-index'

const oswald = Oswald({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Delivery Next | Main',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${oswald.variable} antialiased`}>
				<Header />
				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
