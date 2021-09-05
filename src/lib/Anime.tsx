import { Box, BoxProps } from "@chakra-ui/layout"
import { motion, useAnimation } from "framer-motion"
import { VFC, ReactNode, useEffect, cloneElement, ReactElement } from "react"

export type Props = BoxProps & {
	children: ReactElement
}

const MBox = motion<BoxProps>(Box)

export const CoverAnime: VFC<Props> = (props) => {
	const coverAnimation = useAnimation()
	const baseVisible = useAnimation()

	const sequence = async () => {
		await coverAnimation.start((i) => ({
			scaleX: [0, 1],
			transformOrigin: "left",
			transition: {
				duration: 0.5 - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
			},
		}))
		await baseVisible.start({ opacity: [0, 1], transition: { duration: 0 } })
		await coverAnimation.start((i) => ({
			scaleX: [1, 0],
			transformOrigin: "right",
			transition: {
				duration: 0.5,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
				delay: i * 0.1,
			},
		}))
	}

	useEffect(() => {
		sequence()
	})

	return (
		<Box position="relative">
			<MBox animate={baseVisible} initial={{ opacity: 0 }}>
				{cloneElement(props.children, {
					w: props.w ?? "",
					h: props.h ?? "",
					maxW: props.maxW ?? "",
					maxH: props.maxH ?? "",
					borderRadius: props.borderRadius ?? "none",
				})}
			</MBox>
			<MBox
				custom={1}
				position="absolute"
				top={0}
				left={0}
				w={props.w}
				h={props.h}
				maxW={props.maxW ?? props.w}
				maxH={props.maxH ?? props.h}
				bgColor={"gray.400"}
				borderRadius={props.borderRadius ?? "none"}
				animate={coverAnimation}
				initial={{ scaleX: 0 }}
			/>
			<MBox
				custom={0}
				position="absolute"
				top={0}
				left={0}
				w={props.w}
				h={props.h}
				maxW={props.maxW ?? props.w}
				maxH={props.maxH ?? props.h}
				bgColor={"gray.700"}
				borderRadius={props.borderRadius ?? "none"}
				animate={coverAnimation}
				initial={{ scaleX: 0 }}
			/>
		</Box>
	)
}
