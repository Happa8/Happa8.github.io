module.exports = {
	preset: "ts-jest",
	roots: ["<rootDir>"],
	moduleNameMapper: {
		// CSS モックをモックする設定
		"\\.(css|scss)$": "identity-obj-proxy",
		// pages と components ディレクトリのエイリアスを設定（必要であれば他のディレクトリも追加）
		"^(pages|components)/(.+)": "<rootDir>/src/$1/$2",
	},
	transform: {
		// "^.+\\.stories\\.tsx$": "@storybook/addon-storyshots/injectFileName",
		"^.+\\.(js|ts|tsx)$": "ts-jest",
		// "^.+\\.svg$": "jest-svg-transformer",
		"^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
	},
	testMatch: ["<rootDir>/**/?(*.)(spec|test).(ts|js)?(x)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
	globals: {
		"ts-jest": {
			tsconfig: {
				jsx: "react-jsx",
			},
		},
	},
}
