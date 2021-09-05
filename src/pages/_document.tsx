import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="jp">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=optional"
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
