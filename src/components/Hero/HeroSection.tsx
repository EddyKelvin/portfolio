import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import { Box, Text } from "@chakra-ui/react";

export default function HeroSection(): JSX.Element {
    return (
        <Box position="fixed" zIndex={0} width="100%">
            <Box id="home" width="100%" height="100vh" position="relative" color="#fff" className="background">
                <Box id="stars" />
                <Box id="stars2" />
                <Box id="stars3" />

                <Box textAlign="center" display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                    <Box>
                        <Text as="h1" color="#fff" fontWeight="300" fontSize="2rem" className="mb-4">
                            Hey, I am
                        </Text>
                        <Text as="h1" color="#fff" fontWeight="600" fontSize={{ base: "2rem", md: "3rem" }} marginBottom="2rem">
                            George Allen Barnas
                        </Text>
                        <Text as="p" className="typed" fontSize="1.5rem" fontWeight="300">
                            <Text as="span" className="text-slider-items" fontSize="1.5rem">
                                Am a{" "}
                            </Text>
                            <Box as="span" p="0.4rem" bg="#0081ff69" borderRadius="0.7rem" width="fit-content"><Typed
                                strings={["Front End Developer", "Back End Developer", "Software Engineer"]}
                                typeSpeed={80}
                                backDelay={1100}
                                backSpeed={30}
                                style={{ fontSize: "1.5rem", fontWeight: 300 }}
                                loop
                            /></Box>
                        </Text>
                        <Text color="white" fontWeight="300" fontSize={{ base: "1.5rem", md: "2rem" }}>I enjoy building and designing For the Web and Mobile</Text>
                        {/* <p className="pt-3">
                            <a className="btn btn-primary btn js-scroll px-4" href="#work" role="button">
                                View My Work
                            </a>
                        </p> */}

                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
