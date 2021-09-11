import { ComponentProps, useEffect, VFC } from "react"
import { motion, useAnimation } from "framer-motion"
import { Box, BoxProps } from "@chakra-ui/layout"

const MBox = motion<BoxProps>(Box)

type Props = ComponentProps<typeof MBox> & {
	speed?: number
	colors: string[]
}

const circleProps = {
	r: 100 / Math.PI / 2,
	c: (2 * 100) / Math.PI / 2,
	v: (4 * 100) / Math.PI / 2,
}

const AniCircle: VFC<Props> = ({ colors, speed = 0.5, ...props }) => {
	const circleAnime = useAnimation()

	const sequence = async () => {
		await circleAnime.start((i) => ({
			strokeDasharray: ["0,100", "100,0"],
			transition: {
				duration: speed - i * 0.1,
				type: "tween",
				ease: [0.87, 0, 0.13, 1],
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
	}

	useEffect(() => {
		sequence()
	}, [])

	return (
		<MBox w={"100%"} h={"100%"} {...props}>
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
						}}
						animate={circleAnime}
						key={i}
					/>
				))}
			</motion.svg>
		</MBox>
	)
}

export default AniCircle
