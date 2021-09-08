import { ComponentProps, useEffect, VFC } from "react"
import { motion, useAnimation } from "framer-motion"
import { Box, BoxProps } from "@chakra-ui/layout"
import { transition } from "@chakra-ui/react"

const MBox = motion<BoxProps>(Box)

export type Props = BoxProps & {
	speed?: number
	aniBorderWidth?: number
}

const BorderAniBox: VFC<Props> = (props) => {
	const anime = useAnimation()

	const commonCSS: ComponentProps<typeof MBox> = {
		bgColor: "black",
		position: "absolute",
		animate: anime,
	}

	const sequence = async () => {
		await anime.start((i) => {
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
					duration: props.speed,
					delay: (props.speed ?? 0.5) * i,
					type: "tween",
					ease: [0.87, 0, 0.13, 1],
				},
			}
		})
	}

	useEffect(() => {
		sequence()
	})

	return (
		<Box {...props}>
			<Box position="relative" w="100%" h="100%">
				{/* top */}
				<MBox
					w="100%"
					h={`${props.aniBorderWidth}px`}
					top={0}
					custom={0}
					{...commonCSS}
				/>
				{/* left */}
				<MBox
					w={`${props.aniBorderWidth}px`}
					h="100%"
					left={0}
					custom={3}
					{...commonCSS}
				/>
				{/* bottom */}
				<MBox
					w="100%"
					h={`${props.aniBorderWidth}px`}
					bottom={0}
					custom={2}
					{...commonCSS}
				/>
				{/* right */}
				<MBox
					w={`${props.aniBorderWidth}px`}
					h="100%"
					right={0}
					custom={1}
					{...commonCSS}
				/>
			</Box>
		</Box>
	)
}

BorderAniBox.defaultProps = {
	speed: 0.5,
	aniBorderWidth: 1,
}

export default BorderAniBox
