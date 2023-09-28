import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&family=Manrope:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Nunito:wght@300;400;500;700&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<Toaster />
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
