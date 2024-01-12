
import "./Hero.scss"
import { motion } from "framer-motion"
import Arrow from "./../arrow/Arrow"



export default function Hero() {
  return (
    <div className="container">
      <section className="hero-text">
        <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, }} transition={{ duration: 2 }}>Cutting-edge IT Solutions and Services</motion.h1>
        <p>At Perfect Precision, We specialize in bespoke app development and cloud-based enterprise solutions that propel your company into the future.</p>
        <motion.button whileHover={{scale:1.2}}>Get started</motion.button>
      
        <Arrow ></Arrow>
      </section>
    </div>
  )
}
