import type { AppProps } from "next/app"
import { VFC } from "react"
import { ChakraProvider } from "@chakra-ui/react"

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
