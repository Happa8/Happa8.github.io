import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
const path = require("path")

jest.mock("global", () =>
	Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: "" } })
)

initStoryshots({
	test: imageSnapshot({
		storybookUrl: "file://" + path.resolve(__dirname, "../storybook-static"),
	}),
})
