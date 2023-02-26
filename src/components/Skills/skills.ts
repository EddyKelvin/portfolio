// import images
import figma from "../../assets/Skills/figma.png";
import sketch from "../../assets/Skills/sketch.png";
import ps from "../../assets/Skills/ps.png";
import reactjs from "../../assets/Skills/react.png";
import nodejs from "../../assets/Skills/node.png";
import typescript from "../../assets/Skills/ts.png";
import vue from "../../assets/Skills/vue.png";
import next from "../../assets/Skills/next.png";
import nest from "../../assets/Skills/nest.png";

// import icons from react-icons
import { MdArrowForward } from "react-icons/md";

export const skills = {
  title: "Skills",
  subtitle: "I got the experience. Here is my toolbelt for success.",
  skills_content: [
    {
      name: "Node JS",
      para: "Node.js is a JavaScript runtime environment, which runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
      logo: nodejs,
    },
    {
      name: "Nest JS",
      para: "The Nest is a Nodejs framework which allows developers to build highly scalable and testable applications. It's Built on top of Express.",
      logo: nest,
    },
    {
      name: "TypeScript",
      para: " TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
      logo: typescript,
    },
    {
      name: "Vue.js",
      para: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
      logo: vue,
    },
    {
      name: "React JS",
      para: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      logo: reactjs,
    },
    {
      name: "Next.js",
      para: "Next.js is a framework which enables React-based web applications with server-side rendering and generating static websites",
      logo: next,
    },
    {
      name: "Figma",
      para: "Figma is a collaborative web application for User interface design",
      logo: figma,
    },
  ],
  icon: MdArrowForward,
};
