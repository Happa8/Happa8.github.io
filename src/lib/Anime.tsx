import { Box, BoxProps } from "@chakra-ui/layout"
import { motion, Transition, useAnimation } from "framer-motion"
import { VFC, ReactNode, useEffect, cloneElement, ReactElement } from "react"

export type Props = BoxProps & {
	children: ReactElement
	coverOrigin?: "top" | "left"
} & (
		| {
				currentAnimeTarget: string
				onNext: () => void
				animeTarget: string
		  }
		| {
				currentAnimeTarget?: undefined
				onNext?: undefined
				animeTarget?: undefined
		  }
	)

const MBox = motion<BoxProps>(Box)

export const CoverAnime: VFC<Props> = (props) => {
	const coverAnimation = useAnimation()
	const baseVisible = useAnimation()

	const coverAniDir = (timing: "start" | "end") => {
		if (props.coverOrigin == "left") {
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

	const sequence = async () => {
		await coverAnimation.start((i) => ({
			...coverAniDir("start"),
			transition: {
				duration: 0.5 - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
			},
		}))
		await baseVisible.start({ opacity: [0, 1], transition: { duration: 0 } })
		await coverAnimation
			.start((i) => ({
				...coverAniDir("end"),
				transition: {
					duration: 0.5,
					type: "tween",
					ease: [0.87, 0, 0.13, 1],
					delay: i * 0.1,
				},
			}))
			.then(() => {
				if (props.onNext !== undefined) {
					props.onNext()
				}
			})
	}

	useEffect(() => {
		if (props.onNext === undefined) {
			sequence()
		} else if (props.animeTarget === props.currentAnimeTarget) {
			console.log("trigger border")
			sequence()
		}
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
				initial={props.coverOrigin === "left" ? { scaleX: 0 } : { scaleY: 0 }}
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
				initial={props.coverOrigin === "left" ? { scaleX: 0 } : { scaleY: 0 }}
			/>
		</Box>
	)
}

CoverAnime.defaultProps = {
	coverOrigin: "left",
}
