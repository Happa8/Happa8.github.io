import NextDocument, { Html, Head, Main, NextScript } from "next/document"
export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="jp">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Raleway:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
