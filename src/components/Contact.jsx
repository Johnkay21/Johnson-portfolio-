import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
    const [copied, setcopied] = useState('')
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0}
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setcopied(text)
        setTimeout(() => setcopied(''), 2000)
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
            transsition={{ duration: 2, ease: "easeout" }}
            className="contact"
        >
            <h2>Contact Me</h2>
            <div className='contact-info'>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    onClick={() => copyToClipboard('adejohnson2019b@gmail.com')}
                    className='copyable'
                >
                    Phone: +234 911 822 1379 {copied === '+234 911 822 1379' && <span className='copied-text'>(Copied)</span>}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    onClick={() => copyToClipboard('adejohnson2019b@gmail.com')}
                    className='copyable'
                >
                    Email: adejohnson2019b@gmail.com {copied === 'adejohnson2019b@gmail.com' && <span className='copied-text'>(Copied)</span>}
                </motion.p>       
                    </div>    
        </motion.section>
    )
}

export default Contact