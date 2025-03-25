import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'


const Hero = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.section // 'motion' is used here
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
            transsition={{ duration: 2.5, ease: "easeout" }}
            className="hero"
        >
            <div className='hero-content'>
                <h1> Ayeniko Johnson</h1>
                <p>Frontend Developer</p>
            </div>
            <Canvas className='hero-3d'>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <Sphere args={[1, 32, 32]}>
                    <meshStandardMaterial color="#00b4d8" />
                </Sphere>
            </Canvas>
        </motion.section>
    )
}

export default Hero