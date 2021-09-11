import type { AppProps } from "next/app"
import { VFC } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import theme from "lib/theme"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MyApp: VFC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ChakraProvider>
	)
}

export default MyApp
