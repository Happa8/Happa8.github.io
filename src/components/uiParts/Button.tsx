import { VFC, useState, ReactNode, useEffect } from "react"
import { Box, BoxProps, Button as CButton, ButtonProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

export type Props = ButtonProps & {
	children: ReactNode
}

const MButton = motion<ButtonProps>(CButton)

const Button: VFC<Props> = (props) => {
	return (
		<MButton
			px={10}
			borderWidth={1}
			borderColor={"gray.800"}
			color={"gray.800"}
			borderRadius="none"
			backgroundColor={"whiteAlpha.900"}
			_focus={{ boxShadow: "none" }}
			_hover={{ bgColor: "gray.800", color: "white", borderColor: "white" }}
			_active={{
				bgColor: "gray.800",
				color: "white",
				borderColor: "white",
			}}
			whileTap={{
				scale: 1.1,
				transition: {
					duration: 0.01,
				},
			}}
		>
			{props.children}
		</MButton>
	)
}

export default Button
