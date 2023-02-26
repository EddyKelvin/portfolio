import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import { Box, Text } from "@chakra-ui/react";

export default function HeroSection() {
    return (
        <Box id="home" width="100%" height="100vh" position="relative" color="#fff"
            className="background">
            <Box id="stars" />
            <Box id="stars2" />
            <Box id="stars3" />

            <Box textAlign="center" display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                <Box>
                    <Text as="h1" color="#fff" fontWeight="600" fontSize="3rem" className="mb-4">
                        Hello, I am XYZ
                    </Text>
                    <Text as="p" fontSize="1.5rem" fontWeight="300">
                        <Text as="span" className="text-slider-items"></Text>
                        <strong className="text-slider">
                            <Typed
                                strings={["Front End Developer", "Back End Developer", "Software Engineer"]}
                                typeSpeed={80}
                                backDelay={1100}
                                backSpeed={30}
                                loop
                            />
                        </strong>
                    </Text>
                    <p className="pt-3">
                        <a className="btn btn-primary btn js-scroll px-4" href="#work" role="button">
                            View My Work
                        </a>
                    </p>
                </Box>

            </Box>
        </Box>
    );

}