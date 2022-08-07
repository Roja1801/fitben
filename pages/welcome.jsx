import React from 'react'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const Welcome = () => {
    return (
        <div className={styles.heroImage}

        >

            <motion.div className={styles.welcome}
                initial={{ y: -250, scale: 0.5 }} animate={{ y: 0, scale: 1 }} transition={{ duration: 1 }}
            >
                <h4>FITBEN</h4>
                <h2>BE STRONGER</h2>
                <h1>DOING HARD WORK</h1>
                <p>Fitben is a large room with equipment for exercising the body and increasing strength or a club where you can go to exercise and keep fit</p>
                <motion.a
                    href='#'
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    className={styles.wel_button}>Join with us</motion.a>
            </motion.div>

        </div>
    )
}

export default Welcome