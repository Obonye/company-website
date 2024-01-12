import './Card.scss'
import {info} from "../../data/info"
import {motion} from "framer-motion"

export default function Card() {

    //fix card wrapper behaviour
  return (
    <div className="card-wrapper">
        {
            info.services.map((item,index)=>(
                <div key={index} className="card-container">
            <div className="card-image" >
                <img src={item.hero} alt="" />
            </div>
            <div className="card-title">
                <h1>{item.title}</h1>
            </div>
            <div className="card-description">
                <p>{item.description}</p>
            </div>
            <div className="card-footer">
                <motion.button whileHover={{scale:1.05}}>Learn More</motion.button>
            </div>
        </div>
            ))
        }
        
    </div>
  )
}
