import { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsuscribe = scrollYProgress.on("change", (latest) => {
      console.log("Scroll Progress:", latest);
    })
    return () => unsuscribe()
  }, [scrollYProgress])

  return (
      <div ref={scrollRef} className='container'>
        <Hero />
        <About />
        <Skills />
        <Contact />

      </div>
  )
}        
        
export default App
