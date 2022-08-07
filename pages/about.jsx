import React from 'react'
import styles from '../styles/Home.module.css'
import Aboutimg from '../public/assets/about.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className={styles.aboutout}>
            <div className={styles.about}>

                <div className={styles.about_left}

                >
                    <motion.h2
                        initial={{ x: -250 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
                    ><span>Welcome </span>to Fitben</motion.h2>

                    <motion.p
                        initial={{ x: -250 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptate veritatis corrupti placeat pariatur et modi </motion.p>
                    <motion.p
                        initial={{ x: -250 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptate veritatis corrupti placeat pariatur et modi </motion.p>
                    <motion.p
                        initial={{ x: -250 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptate veritatis corrupti placeat pariatur et modi </motion.p>
                </div>
                <motion.div className={styles.about_right}
                    whileHover={{ scale: 1.2 }}
                    initial={{ x: -250 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}                >
                    <Image
                        src={Aboutimg} alt="img" className={styles.about_right_image} height={450} width={350} >
                    </Image>
                </motion.div>
            </div>

        </div>
    )
}

export default About