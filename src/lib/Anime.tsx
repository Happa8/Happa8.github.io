import { Box, BoxProps } from "@chakra-ui/layout"
import { motion, useAnimation } from "framer-motion"
import { VFC, useEffect, cloneElement, ReactElement, useCallback } from "react"

export type Props = BoxProps & {
	children: ReactElement
	coverOrigin?: "top" | "left"
	coverColors: string[]
	speed?: number
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
	speed,
	onEnd,
	...props
}) => {
	const coverAnimation = useAnimation()
	const baseVisible = useAnimation()

	const sequence = useCallback(async () => {
		await coverAnimation.start((i) => ({
			...coverAniDir(coverOrigin, "start"),
			transition: {
				duration: (speed ?? 0.5) - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
			},
		}))
		await baseVisible.start({ opacity: [0, 1], transition: { duration: 0 } })
		await coverAnimation
			.start((i) => ({
				...coverAniDir(coverOrigin, "end"),
				transition: {
					duration: speed ?? 0.5,
					type: "tween",
					ease: [0.87, 0, 0.13, 1],
					delay: i * 0.1,
				},
			}))
			.then(() => {
				coverAnimation.set(() => ({
					display: "hidden",
				}))
			})
	}, [baseVisible, coverAnimation, coverOrigin, speed])

	useEffect(() => {
		if (onEnd === undefined) {
			sequence()
		} else if (running) {
			console.log("start cover")
			sequence()
				.then(onEnd)
				.then(() => {
					console.log("end cover")
				})
		}
	}, [onEnd, running, sequence])

	return (
		<Box
			position="relative"
			w={props.w ?? "max-content"}
			h={props.h ?? "max-content"}
			maxW={props.maxW ?? "max-content"}
			maxH={props.maxH ?? "max-content"}
		>
			<MBox
				animate={baseVisible}
				initial={{ opacity: 0 }}
				position={"relative"}
			>
				{cloneElement(props.children, {
					w: props.w ?? "",
					h: props.h ?? "",
					maxW: props.maxW ?? "",
					maxH: props.maxH ?? "",
					borderRadius: props.borderRadius ?? "none",
				})}
			</MBox>
			{props.coverColors.map((color, i) => (
				<MBox
					custom={i}
					zIndex={10 - i}
					position="absolute"
					top={0}
					left={0}
					w={"100%"}
					h={"100%"}
					// maxW={props.maxW ?? props.w}
					// maxH={props.maxH ?? props.h}
					bgColor={color}
					borderRadius={props.borderRadius ?? "none"}
					animate={coverAnimation}
					initial={coverOrigin === "left" ? { scaleX: 0 } : { scaleY: 0 }}
					key={i}
				></MBox>
			))}
		</Box>
	)
}
