import React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { Props } from "./Button"

export default {
	title: "uiParts/Button",
	component: Button,
} as Meta<Props>

const Template: Story = (args) => <Button>Button</Button>
export const DefaultButton = Template.bind({})
