import { VFC, useState, ReactNode, useEffect, ComponentProps } from "react"
import { Box, BoxProps, Button as CButton, ButtonProps } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { memo } from "react"

const MButton = motion<ButtonProps>(CButton)

export type Props = ComponentProps<typeof MButton> & {
	children: ReactNode
}

const Button: VFC<Props> = ({ children, ...props }) => {
	return (
		<MButton
			px={10}
			borderWidth={1}
			borderColor={"gray.800"}
			color={"gray.800"}
			borderRadius="none"
			backgroundColor={"whiteAlpha.900"}
			_focus={{ boxShadow: "none" }}
			onClick={() => (document.activeElement as HTMLElement).blur()}
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
			{...props}
		>
			{children}
		</MButton>
	)
}

export default memo(Button)
