import { ComponentProps, VFC, useEffect } from "react"
import { Box, BoxProps, Heading, Text, VStack } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import { Work } from "lib/work"
import Image from "next/image"
import { CoverAnime } from "lib/Anime"
import BorderAniBox from "components/uiParts/BorderAniBox"
import { useSequence } from "hooks/useSequence"

const MBox = motion<BoxProps>(Box)

export type Props = ComponentProps<typeof MBox> & {
	work: Work
}

const WorksItem: VFC<Props> = ({ work, ...props }) => {
	return (
		<MBox
			w={200}
			borderRadius="sm"
			overflow="hidden"
			bgColor={"gray.100"}
			borderColor={"black"}
			{...props}
		>
			<MBox
				w={"100%"}
				bgColor={"whiteAlpha.800"}
				_before={{ content: `""`, display: "block", paddingTop: "100%" }}
				p={5}
				display="flex"
				justifyContent="center"
				alignItems="center"
				position="absolute"
				top={0}
				zIndex={10}
				border={"1px"}
				opacity={0}
				transitionDuration={"0.1s"}
				_hover={{
					opacity: 1,
					transitionDuration: "0.1s",
				}}
			>
				<VStack>
					<Text textAlign="center" fontWeight="bold">
						{work.title}
					</Text>
				</VStack>
			</MBox>
			<MBox
				border={"1px"}
				w={"100%"}
				bgColor={"gray.200"}
				_before={{ content: `""`, display: "block", paddingTop: "100%" }}
				p={5}
				display="flex"
				justifyContent="center"
				alignItems="center"
				position="relative"
			>
				<Image
					layout="fill"
					src={work.imgSrc[0]}
					alt={work.title}
					objectFit={"cover"}
				/>
			</MBox>
		</MBox>
	)
}

export default WorksItem
