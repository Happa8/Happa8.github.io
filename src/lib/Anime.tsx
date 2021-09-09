import { Box, BoxProps } from "@chakra-ui/layout"
import { motion, useAnimation } from "framer-motion"
import { cloneElement, ReactElement, useCallback, useEffect, VFC } from "react"

export type Props = BoxProps & {
	children: ReactElement
	coverOrigin?: "top" | "left"
} & (
		| {
				running: boolean
				onEnd: () => void
		  }
		| {
				running?: undefined
				onEnd?: undefined
		  }
	)

const MBox = motion<BoxProps>(Box)

const coverAniDir = (origin: "top" | "left", timing: "start" | "end") => {
	if (origin == "left") {
		if (timing === "start") {
			return {
				scaleY: 1,
				scaleX: [0, 1],
				transformOrigin: "left",
			}
		} else {
			return {
				scaleY: 1,
				scaleX: [1, 0],
				transformOrigin: "right",
			}
		}
	} else {
		if (timing === "start") {
			return {
				scaleX: 1,
				scaleY: [0, 1],
				transformOrigin: "top",
			}
		} else {
			return {
				scaleX: 1,
				scaleY: [1, 0],
				transformOrigin: "bottom",
			}
		}
	}
}

export const CoverAnime: VFC<Props> = ({
	coverOrigin = "left",
	running,
	onEnd,
	...props
}) => {
	const coverAnimation = useAnimation()
	const baseVisible = useAnimation()

	const sequence = useCallback(async () => {
		await coverAnimation.start((i) => ({
			...coverAniDir(coverOrigin, "start"),
			transition: {
				duration: 0.5 - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
			},
		}))
		await baseVisible.start({ opacity: [0, 1], transition: { duration: 0 } })
		await coverAnimation.start((i) => ({
			...coverAniDir(coverOrigin, "start"),
			transition: {
				duration: 0.5,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
				delay: i * 0.1,
			},
		}))
	}, [baseVisible, coverAnimation, coverOrigin])

	useEffect(() => {
		if (onEnd === undefined) {
			sequence()
		} else if (running) {
			console.log("trigger border")
			sequence().then(onEnd)
		}
	}, [onEnd, running, sequence])

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
				initial={coverOrigin === "left" ? { scaleX: 0 } : { scaleY: 0 }}
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
				initial={coverOrigin === "left" ? { scaleX: 0 } : { scaleY: 0 }}
			/>
		</Box>
	)
}
