import { NextPage } from "next"
import {
	Box,
	BoxProps,
	Flex,
	Heading,
	HStack,
	Spacer,
	Text,
	VStack,
	Stack,
	Divider,
	Link as CLink,
} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { motion } from "framer-motion"
import Head from "next/head"
import { CoverAnime } from "lib/Anime"
import BorderAniBox from "components/uiParts/BorderAniBox"
import { useSequence } from "hooks/useSequence"
import Button from "components/uiParts/Button"
import { useDisclosure } from "@chakra-ui/hooks"
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal"
import WorksJSON from "data/works.json"
import WorksItem from "components/pages/works/WorksItem"
import { Work } from "lib/work"
import { useEffect, useState } from "react"
// import Image from "next/image"
import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Slider from "react-slick"

import { FaExternalLinkAlt, FaUser, FaPenAlt, FaLink } from "react-icons/fa"
const MBox = motion<BoxProps>(Box)

const animeColor = ["black", "gray", "silver"]

const Works: NextPage = () => {
	const { next, phase } = useSequence([
		"boxBorder",
		"boxCover",
		"title",
		"workBox",
	])
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [currentWork, setCurrentWork] = useState<Work>()

	useEffect(() => {
		if (!isOpen && currentWork !== undefined) {
			// console.log(isOpen, currentWork)
			onOpen()
		}
	}, [currentWork, isOpen, onOpen])

	return (
		<MBox exit={{ x: -1000, opacity: [1, 0], transition: { duration: 0.3 } }}>
			<Head>
				<title>WORKS - Happa8 Website</title>
			</Head>
			<Flex
				width="100%"
				minH="100vh"
				py={10}
				justifyContent="center"
				alignItems="center"
				fontFamily="Raleway, Noto Sans JP"
			>
				<BorderAniBox onEnd={next} running={phase == "boxBorder"} speed={0.3}>
					<CoverAnime
						onEnd={next}
						running={phase == "boxCover"}
						coverOrigin="top"
						coverColors={animeColor}
						speed={0.3}
					>
						<Flex
							p={10}
							bgColor={"gray.100"}
							flexDir="column"
							gridGap={5}
							borderRadius={"sm"}
							w={"90vw"}
							maxW={600}
							h={"max-content"}
							alignItems={"center"}
						>
							<CoverAnime
								onEnd={next}
								running={phase == "title"}
								coverColors={animeColor}
								speed={0.3}
							>
								<Heading fontSize="2xl" fontFamily="Raleway">
									WORKS
								</Heading>
							</CoverAnime>
							<Flex
								py={10}
								w={"100%"}
								flexWrap="wrap"
								justifyContent="space-around"
								gridGap={5}
							>
								{WorksJSON.map((item, i) => (
									<CoverAnime
										onEnd={next}
										running={phase == "workBox"}
										coverColors={animeColor}
										key={item.title}
										speed={0.3}
										delay={0.05 * i}
										w={"100%"}
										maxW={250}
										minW={"100%"}
									>
										<WorksItem
											w={"100%"}
											work={item as any}
											onClick={() => {
												setCurrentWork(item as any)
											}}
										/>
									</CoverAnime>
								))}
							</Flex>
							<CoverAnime
								running={phase == "workBox"}
								onEnd={next}
								delay={0.05 * WorksJSON.length}
								coverColors={["gray", "black"]}
								speed={0.3}
							>
								<Link href="/" passHref>
									<Button as="a" leftIcon={<AiOutlineArrowLeft />}>
										Back
									</Button>
								</Link>
							</CoverAnime>
							{/* <Button onClick={onOpen}>Modal</Button> */}
						</Flex>
					</CoverAnime>
				</BorderAniBox>
			</Flex>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				// isCentered
				colorScheme="whiteAlpha"
				size="xl"
			>
				{/* <ModalOverlay /> */}
				<ModalContent
					borderRadius="sm"
					backgroundColor={"transparent"}
					boxShadow="none"
					alignItems="center"
				>
					<BorderAniBox w="100%" maxW="95vw" speed={0.1}>
						<CoverAnime
							coverColors={animeColor}
							coverOrigin="top"
							w="100%"
							maxW="100%"
							delay={0.8}
							speed={0.3}
						>
							<Box
								w="100%"
								maxW={"100%"}
								bgColor={"gray.50"}
								boxSizing={"border-box"}
								p={5}
							>
								{/* <ModalHeader>
									<Text fontSize="2xl" fontFamily={`Raleway, "Noto Sans JP"`}>
										{currentWork?.title}
									</Text>
								</ModalHeader> */}
								<ModalCloseButton
									borderRadius="sm"
									_focus={{ boxShadow: "none" }}
									_hover={{
										bgColor: "gray.800",
										color: "white",
										borderColor: "white",
									}}
									_active={{
										bgColor: "gray.800",
										color: "white",
										borderColor: "white",
									}}
									onClick={() => {
										onClose()
										setCurrentWork(undefined)
									}}
								/>
								<ModalBody>
									<VStack py={10}>
										<Box w={"100%"} maxW={500} border={"1px"}>
											<Slider speed={500} dots={true} arrows={false} autoplay>
												{currentWork?.imgSrc.map((item) => (
													<Box
														w={"100%"}
														h={60}
														position="relative"
														verticalAlign="bottom"
														key={item}
														bgImage={item}
														bgSize={"contain"}
														bgRepeat="no-repeat"
														bgPosition="center"
													>
														{/* <Image
															layout="fill"
															src={item}
															alt={currentWork?.title}
															// quality={100}
															objectFit="contain"
														/> */}
													</Box>
												))}
											</Slider>
										</Box>
										<Heading py={5} fontSize="2xl" letterSpacing="widest">
											{currentWork?.title}
										</Heading>
										<Text
											fontFamily="Noto Sans JP"
											fontSize="sm"
											textAlign="center"
											marginBottom={3}
											maxW={400}
										>
											{currentWork?.description}
										</Text>
										<Divider colorScheme={"gray"} />
										<Stack
											py={5}
											spacing={5}
											w={"90%"}
											maxW={300}
											minW={"max-content"}
										>
											<HStack spacing={5}>
												<Text>
													<FaUser />
												</Text>
												<Text fontWeight="bold">Client</Text>
												<Spacer />
												<Text fontFamily="Noto Sans JP">
													{currentWork?.client}
												</Text>
											</HStack>
											<HStack spacing={5}>
												<Text>
													<FaPenAlt />
												</Text>
												<Text fontWeight="bold">Type</Text>
												<Spacer />
												<Text>{currentWork?.type}</Text>
											</HStack>
											<HStack spacing={5}>
												<Text>
													<FaLink />
												</Text>
												<Text fontWeight="bold">Link</Text>
												<Spacer />
												<Text>
													{currentWork?.link?.map((item) => (
														<CLink
															href={item}
															key={item}
															isExternal
															display="flex"
															alignItems="center"
														>
															<span>Link</span>
															<Text marginLeft={1} fontSize="sm">
																<FaExternalLinkAlt />
															</Text>
														</CLink>
													))}
												</Text>
											</HStack>
										</Stack>
									</VStack>
								</ModalBody>
								<ModalFooter>
									<Button
										onClick={() => {
											onClose()
											setCurrentWork(undefined)
										}}
									>
										Close
									</Button>
								</ModalFooter>
							</Box>
						</CoverAnime>
					</BorderAniBox>
				</ModalContent>
			</Modal>
		</MBox>
	)
}

export default Works
