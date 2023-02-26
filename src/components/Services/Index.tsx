import { Box, Text } from "@chakra-ui/react";
import { services } from "./Services";
import github from "../../assets/github.png";
import linkdlin from "../../assets/linkdlin.png";

const Services = (): JSX.Element => {
    return (
        <Box as="section" id="services" bg="white">
            <Box position="absolute"
                cursor="pointer"
                top="95vh"
                left="50%"
                zIndex={100}
                transform="translate(-50%,-50%)"
                display="flex" gap="1rem">
                <Text
                    as="a"
                    href="https://github.com/EddyKelvin"
                    target="_blank"

                >
                    <img src={github} alt="..." className="mx-auto max-w-[3rem]" />
                </Text>
                <Text
                    as="a"
                    href="https://linkedin.com"
                    target="_blank"

                >
                    <img src={linkdlin} alt="..." className="mx-auto max-w-[3rem]" />
                </Text>
            </Box>
            <Box className="md:container px-5 py-24">
                <Text as="h2" fontSize="1.875rem" data-aos="fade-down">
                    {services.title}
                </Text>
                <Text as="h4" fontSize="2.25rem" data-aos="fade-down">
                    {services.subtitle}
                </Text>
                <br />
                <Box className="flex gap-5 justify-between flex-wrap group">
                    {services.service_content.map((content, i) => (
                        <Box
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 600}
                            className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
                        >
                            <img src={content.logo} alt="..." className="mx-auto max-w-[3rem]" />
                            <h6 className="my-3">{content.title}</h6>
                            <p className="leading-7">{content.para}</p>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Services;