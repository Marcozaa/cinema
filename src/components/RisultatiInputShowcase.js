import { Divider } from '@mantine/core'
import React from 'react'
import './risultatiInputShowcase.css'
import { motion } from "framer-motion"
export default function RisultatiInputShowcase() {
  return (
       <motion.div
    animate={{
      opacity: [0,1],
    }}
    transition={{ duration: 1 }}
  >
    <div className='risultatiInputShowcase'>
        <div className="item">
            <div className="image">
                <img src='https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg'/>
            </div>
            <div className="content">
                <h1>Interstellar</h1>
                <p>2014</p>
                <p>Matthew McConaughey, Anne Hathaway</p>
            </div>
        </div>
        <Divider/>
        <div className="item">
            <div className="image">
                <img src='https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg'/>
            </div>
            <div className="content">
                <h1>Interspecies Reviewers</h1>
                <p>2020</p>
                <p>Junji Majima, Yusuke Kobayashi</p>
            </div>
        </div>
        <Divider />
        <div className="item">
            <div className="image">
                <img src='https://i2.wp.com/www.badtaste.it/cinema/wp-content/uploads/sites/1/2022/01/batman-poster-italiano-esclusivo.jpg?resize=1400%2C2075&quality=85&strip=all&ssl=1'/>
            </div>
            <div className="content">
                <h1>Intersection</h1>
                <p>1994</p>
                <p>Richard Gere, Sharon Stone</p>
            </div>
        </div>
       
    </div>
    </motion.div>
  )
}
