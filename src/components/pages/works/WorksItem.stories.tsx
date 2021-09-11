import React from "react"
import { Story, Meta } from "@storybook/react"

import WorksItem, { Props } from "./WorksItem"
import WorksJSON from "../../../data/works.json"

export default {
	title: "Works/WorksItem",
	component: WorksItem,
} as Meta<Props>

const Template: Story = (args) => <WorksItem work={WorksJSON[0]} />
export const Default = Template.bind({})
