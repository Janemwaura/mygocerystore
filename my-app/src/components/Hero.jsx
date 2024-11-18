import React from 'react'
import css from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/components/Hero.module.css'
import img1 from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/orange1.png'
import img2 from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/fruitbasket.png'
import img3 from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/orange1.png'
import img4 from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/banana.jpg'
import img5 from '/home/janewmwaura/ecommerce/mygocerystore/my-app/src/assets/cucumber.png'
import { motion } from 'framer-motion';
const Hero = () => { 
  return (
    <div className={css.container}> 
        <div className={css.h_sides}>
        <div className={css.img4}>
                <img src={img4} alt="banana" />
            </div>
        
            <span className={css.text1}>Fresh and healthy</span>
            <span className={css.text2}>Organic Grocery</span>
            <div className={css.button}>
                <button>Shop now</button> 
            </div>
        </div>
        <div className={css.r_sides}>
            <div className={css.img2}>
            <motion.img
                initial={{ bottom: "3rem" }}
                whileInView={{ bottom: "0rem" }}
                transition={{ duration: 1 }} 
                src={img2} 
                alt="" 
                width={600} 
                style={{ position: "relative" }} 
/>
            </div>
            <div className={css.img3}>
                <img src={img3} alt="orange" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero