import { Box } from "@chakra-ui/react";
import { services } from "./Services";

const Services = () => {
    return (
        <Box as="section" id="services">
            <Box className="md:container px-5 py-24">
                <h2 className="title" data-aos="fade-down">
                    {services.title}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {services.subtitle}
                </h4>
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
                            <img src={content.logo} alt="..." className="mx-auto" />
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