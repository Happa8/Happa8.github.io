import type { AppProps } from "next/app"
import { VFC } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

const MyApp: VFC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ChakraProvider>
	)
}

export default MyApp
