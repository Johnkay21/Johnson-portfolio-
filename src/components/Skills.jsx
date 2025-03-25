import { motion } from 'framer-motion'

const Skills = () => {
    const skills = [ 'React', 'JavaScript', 'CSS', 'HTML', 'Vite']
    
    const fadeIn = {
        hidden: { opaccity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 2, ease: "easeOut"}}
            className="skills"
        >
            <h2>Skills</h2>
            <div className='skills-grid'>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                        className='skill-item'
                    >
                        {skill}
                    </motion.div>    
                ))}
            </div>
        </motion.section>
               
    )
}

export default Skills