import {
	Box,
	BoxProps,
	Flex,
	transition,
	Heading,
	Text,
	HStack,
	Spacer,
	Stack,
	Image,
} from "@chakra-ui/react"
import { NextPage } from "next"
import Link from "next/link"
// import Image from "next/image"
import Head from "next/head"
import { motion, useAnimation, useCycle } from "framer-motion"
import { ReactNode, useEffect } from "react"
import AniCircle from "components/uiParts/AniCircle"
import BorderAniBox from "components/uiParts/BorderAniBox"
import { CoverAnime } from "lib/Anime"
import { useSequence } from "hooks/useSequence"
import {
	FaBirthdayCake,
	FaUser,
	FaHammer,
	FaSeedling,
	FaRegPaperPlane,
} from "react-icons/fa"
import Button from "components/uiParts/Button"
import { AiOutlineArrowLeft } from "react-icons/ai"

const MBox = motion<BoxProps>(Box)

const ProfileData: {
	icon: ReactNode
	title: string
	content: string | ReactNode
}[] = [
	{ icon: <FaBirthdayCake />, title: "Birth", content: "2000.08.23" },
	{ icon: <FaUser />, title: "Gender", content: "Male" },
	{
		icon: <FaHammer />,
		title: "Skill",
		content: "Web Frontend, Graphic Design",
	},
	{
		icon: <FaSeedling />,
		title: "Interest",
		content: "Graphic Design, UI Design, Sensory Feedback, Human Interaction",
	},
	{
		icon: <FaRegPaperPlane />,
		title: "Contact",
		content: (
			<span>
				{"contact [at] happa8.dev"}
				<br />
				{"X(Twitter): @happa_eight"}
			</span>
		),
	},
]

const AboutMe: NextPage = () => {
	const { next, phase } = useSequence([
		"border",
		"boxCover",
		"profile",
		"",
		"",
		"",
		"",
		"",
		"",
	])

	return (
		<MBox exit={{ x: -1000, opacity: [1, 0], transition: { duration: 0.3 } }}>
			<Head>
				<title>ABOUT ME - Happa8</title>
			</Head>
			<Flex w="100%" minH="100vh" justifyContent="center" alignItems="center">
				<MBox position="relative" py={10}>
					<BorderAniBox speed={0.3} running={phase == "border"} onEnd={next}>
						<CoverAnime
							coverColors={["black", "gray"]}
							running={phase == "boxCover"}
							onEnd={next}
							coverOrigin="top"
							speed={0.3}
						>
							<Flex
								w={"90vw"}
								maxW={600}
								h={"max-content"}
								alignItems="center"
								p={10}
								bgColor={"gray.100"}
								flexDir="column"
								gridGap={5}
								borderRadius={"sm"}
							>
								<AniCircle
									w={150}
									h={150}
									colors={["gray", "black"]}
									chirdrenProps={{
										border: "1px",
										borderColor: "black",
									}}
									running={phase == "profile"}
									onEnd={next}
									speed={0.3}
								>
									<Image
										// layout="fill"
										alt={"happa8"}
										src="/images/happa8.png"
									/>
								</AniCircle>
								<CoverAnime
									coverColors={["black", "gray"]}
									running={phase == "profile"}
									onEnd={next}
									speed={0.3}
								>
									<Heading fontFamily="Raleway" px={5}>
										Happa8
									</Heading>
								</CoverAnime>
								<Box fontFamily="Raleway" py={10} maxW={"95%"}>
									<Stack
										spacing={5}
										fontSize={"md"}
										w={"max-content"}
										maxW={"100%"}
									>
										{ProfileData.map((item, i) => (
											<CoverAnime
												coverColors={["gray", "black"]}
												running={phase == "profile"}
												onEnd={next}
												key={item.title}
												w={"100%"}
												maxW={"100%"}
												delay={(i + 1) * 0.05}
											>
												<HStack spacing={5}>
													<Text>{item.icon}</Text>
													<Text fontWeight="bold">{item.title}</Text>
													<Spacer />
													<Text textAlign="right">{item.content}</Text>
												</HStack>
											</CoverAnime>
										))}
									</Stack>
								</Box>
								<CoverAnime
									running={phase == "profile"}
									onEnd={next}
									delay={0.3}
									coverColors={["gray", "black"]}
								>
									<Link href="/" passHref>
										<Button as="a" leftIcon={<AiOutlineArrowLeft />}>
											Back
										</Button>
									</Link>
								</CoverAnime>
							</Flex>
						</CoverAnime>
					</BorderAniBox>
				</MBox>
			</Flex>
		</MBox>
	)
}
export default AboutMe
