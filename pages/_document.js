import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-Regular.woff" as="font" crossOrigin=""
					/>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-Medium.woff" as="font" crossOrigin=""
					/>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-SemiBold.woff" as="font" crossOrigin=""
					/>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-Bold.woff" as="font" crossOrigin=""
					/>
					{/* 
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-Thin.ttf" as="font" crossOrigin=""
					/>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-ExtraBold.ttf" as="font" crossOrigin=""
					/>
					<link rel="preload"
						href="/fonts/Gilroy/Gilroy-Black.ttf" as="font" crossOrigin=""
					/> */}
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument