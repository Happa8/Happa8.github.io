import React from "react"
import { Story, Meta } from "@storybook/react"

import { CoverAnime, Props } from "./Anime"
import { Button, Box } from "@chakra-ui/react"

export default {
	title: "uiParts/CoverAnime",
	component: CoverAnime,
} as Meta<Props>

const Template: Story = (args) => (
	<CoverAnime
		w={"90vw"}
		h={100}
		maxW={200}
		borderRadius={"base"}
		coverOrigin="top"
	>
		<Button>Button</Button>
	</CoverAnime>
)
export const DefaultButton = Template.bind({})
