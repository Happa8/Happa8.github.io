import React from "react"
import { Story, Meta } from "@storybook/react"

import BorderAniBox, { Props } from "./BorderAniBox"

export default {
	title: "uiParts/BorderAniBox",
	component: BorderAniBox,
} as Meta<Props>

const Template: Story = (args) => (
	<BorderAniBox w={"100%"} h={300} aniBorderWidth={2} />
)
export const DefaultButton = Template.bind({})
