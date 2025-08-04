
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
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
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className={`${oswald.variable} antialiased`}>
			<Header />
			{children}
			{modal}
		</main>
	)
}
