import { motion } from 'framer-motion'

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3}}
            variants={fadeIn}
            transition={{ duration: 2.5, ease: "easeOut"}}
            className='about'
        >
            <h2>About Me</h2>
            <p>I'm a passionate Frontend Developer with Experience in React.js.</p>
            <p>Providing a neat and responsive design</p>
        </motion.section>    
    )
}

export default About