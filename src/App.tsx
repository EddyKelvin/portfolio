import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services/Index'
import Skills from './components/Skills/Index';
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <HeroSection />
      <Box position="relative" zIndex={100} paddingTop="100vh">
        <Services />
        <Skills />
        <Footer />
      </Box>
    </div>
  )
}

export default App
