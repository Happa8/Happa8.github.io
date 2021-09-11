import { ComponentProps, ReactNode, useCallback, useEffect, VFC } from "react"
import { motion, useAnimation } from "framer-motion"
import { Box, BoxProps } from "@chakra-ui/layout"
import { AnimeChild } from "hooks/useSequence"

const MBox = motion<BoxProps>(Box)

type Props = ComponentProps<typeof MBox> & {
	speed?: number
	colors: string[]
	children?: ReactNode
	chirdrenProps?: ComponentProps<typeof MBox>
} & AnimeChild

const circleProps = {
	r: 100 / Math.PI / 2,
	c: (2 * 100) / Math.PI / 2,
	v: (4 * 100) / Math.PI / 2,
}

const AniCircle: VFC<Props> = ({
	colors,
	speed = 0.5,
	onEnd,
	running,
	children = <Box />,
	chirdrenProps,
	...props
}) => {
	const circleAnime = useAnimation()
	const baseVisible = useAnimation()

	const sequence = useCallback(async () => {
		await circleAnime.start((i) => ({
			strokeDasharray: ["0,100", "100,0"],
			opacity: [1, 1],
			transition: {
				duration: speed - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
			},
		}))
		await baseVisible.start(() => ({
			opacity: [0, 1],
			transition: {
				duration: 0,
			},
		}))
		await circleAnime.start((i) => ({
			strokeDasharray: ["100,0", "0,100"],
			scaleX: [-1, -1],
			transition: {
				duration: speed,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
				delay: i * 0.1,
			},
		}))
		await circleAnime.start(() => ({
			opacity: 0,
			transition: {
				duration: 0,
			},
		}))
	}, [circleAnime, speed, baseVisible])

	useEffect(() => {
		if (onEnd === undefined) {
			sequence()
		} else if (running) {
			sequence().then(onEnd)
		}
	}, [onEnd, running, sequence])

	return (
		<MBox w={"100%"} h={"100%"} position="relative" {...props}>
			<MBox
				w={"100%"}
				h={"100%"}
				position="absolute"
				zIndex={10}
				pointerEvents="none"
			>
				<motion.svg viewBox={`0 0 ${circleProps.v} ${circleProps.v}`}>
					{colors.map((item, i) => (
						<motion.circle
							custom={colors.length - 1 - i}
							cx={circleProps.c}
							cy={circleProps.c}
							r={circleProps.r}
							fill="transparent"
							stroke={item}
							strokeWidth={circleProps.c}
							initial={{
								rotate: "-90deg",
								opacity: 0,
							}}
							animate={circleAnime}
							key={i}
						/>
					))}
				</motion.svg>
			</MBox>
			<MBox
				w="100%"
				h="100%"
				position="absolute"
				top={0}
				borderRadius="full"
				overflow="hidden"
				animate={baseVisible}
				initial={{ opacity: 0 }}
				{...chirdrenProps}
			>
				{children}
			</MBox>
		</MBox>
	)
}

export default AniCircle
