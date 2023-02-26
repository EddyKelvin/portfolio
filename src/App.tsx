import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services/Index'
import Skills from './components/Skills/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <HeroSection />
      <Services />
      <Skills />
    </div>
  )
}

export default App
