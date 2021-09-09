import { Box, BoxProps } from "@chakra-ui/layout"
import { motion, useAnimation } from "framer-motion"
import { ComponentProps, ReactNode, useCallback, useEffect, VFC } from "react"

const MBox = motion<BoxProps>(Box)

export type Props = BoxProps & {
	speed?: number
	aniBorderWidth?: number
	children?: ReactNode
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

const BorderAniBox: VFC<Props> = ({
	speed = 0.5,
	aniBorderWidth = 1,
	children,
	onEnd,
	running,
	...props
}) => {
	const anime = useAnimation()

	const commonCSS: ComponentProps<typeof MBox> = {
		bgColor: "black",
		position: "absolute",
		animate: anime,
		initial: { scaleX: 0, scaleY: 0 },
	}

	const sequence = useCallback(
		() =>
			anime.start((i) => {
				const transformAnime = () => {
					switch (i) {
						case 0:
							return {
								scaleY: 1,
								scaleX: [0, 1],
								transformOrigin: "left",
							}
						case 1:
							return {
								scaleX: 1,
								scaleY: [0, 1],
								transformOrigin: "top",
							}
						case 2:
							return {
								scaleY: 1,
								scaleX: [0, 1],
								transformOrigin: "right",
							}
						case 3:
							return {
								scaleX: 1,
								scaleY: [0, 1],
								transformOrigin: "bottom",
							}
					}
				}
				return {
					...transformAnime(),
					transition: {
						duration: speed,
						delay: (speed ?? 0.5) * i,
						type: "tween",
						ease: [0.87, 0, 0.13, 1],
					},
				}
			}),
		[anime, speed]
	)

	useEffect(() => {
		if (onEnd === undefined) {
			console.log("undefined start trigger")
			sequence()
		} else if (running) {
			console.log("trigger border")
			sequence().then(onEnd)
		}
	}, [onEnd, running, sequence])

	return (
		<Box {...props}>
			<Box position="relative" w="100%" h="100%">
				{/* top */}
				<MBox
					w="100%"
					h={`${aniBorderWidth}px`}
					top={0}
					custom={0}
					{...commonCSS}
				/>
				{/* left */}
				<MBox
					w={`${aniBorderWidth}px`}
					h="100%"
					left={0}
					custom={3}
					{...commonCSS}
				/>
				{/* bottom */}
				<MBox
					w="100%"
					h={`${aniBorderWidth}px`}
					bottom={0}
					custom={2}
					{...commonCSS}
				/>
				{/* right */}
				<MBox
					w={`${aniBorderWidth}px`}
					h="100%"
					right={0}
					custom={1}
					{...commonCSS}
				/>
			</Box>
		</Box>
	)
}

export default BorderAniBox
