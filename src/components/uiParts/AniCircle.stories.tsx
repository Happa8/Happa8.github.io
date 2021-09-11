import React from "react"
import { Story, Meta } from "@storybook/react"

import AniCircle from "./AniCircle"

export default {
	title: "uiParts/AniCircle",
	component: AniCircle,
} as Meta

const Template: Story = (args) => <AniCircle colors={["gray", "black"]} />
export const Default = Template.bind({})
