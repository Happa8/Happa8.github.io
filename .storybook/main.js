const path = require("path")

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	// addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	// typescript: {
	// 	check: true,
	// 	checkOptions: {},
	// 	reactDocgen: "react-docgen-typescript",
	// 	reactDocgenTypescriptOptions: {
	// 		include: [
	// 			"../src/**/*.stories.mdx",
	// 			"../src/**/*.stories.@(js|jsx|ts|tsx)",
	// 		],
	// 	},
	// },
	// core: {
	// 	builder: "webpack5",
	// },
	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					src: path.resolve(__dirname, "../src"),
					"@emotion/core": path.resolve(
						__dirname,
						"../node_modules/@emotion/react"
					),
					"emotion-theming": path.resolve(
						__dirname,
						"../node_modules/@emotion/react"
					),
				},
			},
		}
	},
}
