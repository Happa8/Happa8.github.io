import {
	Box,
	BoxProps,
	ButtonGroup,
	Flex,
	Heading,
	HStack,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import { CoverAnime } from "lib/Anime"
import BorderAniBox from "components/uiParts/BorderAniBox"
import React, { useEffect, useState, useReducer } from "react"
import Button from "components/uiParts/Button"
import { useSequence } from "hooks/useSequence"
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion } from "framer-motion"

const MBox = motion<BoxProps>(Box)

const Home: NextPage = () => {
	const { next, phase } = useSequence(["border", "cover", "header", "", ""])

	return (
		<MBox exit={{ x: 1000, opacity: [1, 0], transition: { duration: 0.3 } }}>
			<Head>
				<title>Happa8 Website</title>
				<meta name="description" content="Happa8 Website" />
				<link rel="icon" href="/images/happa8.png" />
			</Head>
			<Flex
				width="100%"
				height="100vh"
				justifyContent="center"
				alignItems="center"
			>
				<Box position="relative">
					<BorderAniBox running={phase === "border"} onEnd={next} speed={0.3}>
						<CoverAnime
							running={phase == "cover"}
							onEnd={next}
							coverColors={["black", "gray"]}
							coverOrigin={"top"}
							speed={0.3}
						>
							<Flex
								w={"90vw"}
								maxW={600}
								bgColor={"gray.100"}
								p={10}
								flexDir="column"
								gridGap={8}
								flexWrap="wrap"
							>
								<CoverAnime
									coverColors={["black"]}
									running={phase === "header"}
									onEnd={next}
									speed={0.3}
									maxW={"100%"}
								>
									<Heading as="h1" size="2xl" fontFamily="Raleway">
										Happa8 Website
									</Heading>
								</CoverAnime>
								<Box display="inline-flex" flexWrap="wrap" gridGap={3}>
									<CoverAnime
										width={"max-content"}
										h={"max-content"}
										coverColors={["black"]}
										running={phase === "header"}
										onEnd={next}
										speed={0.3}
										delay={0.05}
									>
										<Link href="/aboutme" passHref>
											<Button as="a" rightIcon={<AiOutlineArrowRight />}>
												PROFILE
											</Button>
										</Link>
									</CoverAnime>
									<CoverAnime
										width={"max-content"}
										h={"max-content"}
										coverColors={["black"]}
										running={phase === "header"}
										onEnd={next}
										speed={0.3}
										delay={0.1}
									>
										<Link href="/works" passHref>
											<Button as="a" rightIcon={<AiOutlineArrowRight />}>
												WORKS
											</Button>
										</Link>
									</CoverAnime>
								</Box>
							</Flex>
						</CoverAnime>
					</BorderAniBox>
				</Box>
			</Flex>
		</MBox>
	)
}

export default Home
