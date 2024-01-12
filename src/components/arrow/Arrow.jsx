import "./Arrow.scss"
import {motion} from "framer-motion"
import { FaArrowDown } from "react-icons/fa";


const bounceTransition={
  y:{
    duration:0.4,
    yoyo:Infinity,
    ease:"easeOut"
  }
};
export default function Arrow() {
  return (
    <div className="arrow-container">
          
          <motion.span transition={bounceTransition} animate={{y:["100%","-100%"]}}>
            <FaArrowDown  />
          </motion.span>
          
    </div>
  )
}
