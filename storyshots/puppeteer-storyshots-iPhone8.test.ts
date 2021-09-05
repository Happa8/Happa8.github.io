import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
import { devices, Page } from "puppeteer"
const path = require("path")

const customizePage = (page: Page) => page.emulate(devices["iPhone 8"])
jest.mock("global", () =>
	Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: "" } })
)

initStoryshots({
	suite: "Image storyshots: iPhone 8",
	test: imageSnapshot({
		customizePage,
		storybookUrl: "file://" + path.resolve(__dirname, "../storybook-static"),
	}),
})
