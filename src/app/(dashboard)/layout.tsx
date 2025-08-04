import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import '../globals.css'

const oswald = Oswald({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Delivery Next | Main',
}


export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${oswald.variable} antialiased`}>
				asd
				{children}
			</body>
		</html>
	)
}
