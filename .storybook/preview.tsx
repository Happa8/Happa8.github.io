import { ChakraProvider } from "@chakra-ui/react"
import { Story } from "@storybook/react"
import React from "react"
import theme from "../src/lib/theme"
import * as nextImage from "next/image"

const withChakra = (Story: Story) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Story />
		</ChakraProvider>
	)
}

Object.defineProperty(nextImage, "default", {
	configurable: true,
	value: (props) => <img {...props} />,
})

export const decorators = [withChakra]

const customViewports = {
	/** iPhone X */
	base: {
		name: "base",
		styles: {
			width: "375px",
			height: "812px",
		},
		type: "mobile",
	},
	/** iPad */
	md: {
		name: "md",
		styles: {
			width: "768px",
			height: "1024px",
		},
		type: "tablet",
	},
	/** MacBook Air */
	lg: {
		name: "lg",
		styles: {
			width: "1280px",
			height: "800px",
		},
		type: "desktop",
	},
}

export const parameters = {
	// actions: { argTypesRegex: "^on[A-Z].*" },
	// controls: {
	// 	matchers: {
	// 		color: /(background|color)$/i,
	// 		date: /Date$/,
	// 	},
	// },
	viewport: {
		viewports: customViewports,
		defaultViewport: "base",
	},
}
