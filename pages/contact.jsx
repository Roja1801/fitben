import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import youtube from '../public/assets/youtube.png'
import instagram from '../public/assets/instagram.png'
import facebook from '../public/assets/facebook.png'
import { motion } from 'framer-motion'


const Contact = () => {
    return (
        <div className={styles.contactout}>
            <div className={styles.contact}>
                <motion.h2
                    initial={{ x: -250 }}
                    whileInView={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    viewport={{ once: true }}
                ><span>GET </span>IN TOUCH</motion.h2>
                <motion.div className={styles.contactin}
                    initial={{ x: -250 }}
                    whileInView={{ x: 0 }}
                    whileHover={{ scale: 1.2 }}

                    transition={{ duration: 1, type: 'spring' }}
                    viewport={{ once: true }}
                >

                    <div className={styles.contactLeftRight}>

                        <h4>Address</h4>
                        <p>4/33 Supply road,3rd lane,Market</p>
                        <h4>Email</h4>
                        <p>fitben@gmail.com</p>
                        <h4>Opening Hour</h4>
                        <p>Sun-Fri(10:00-9:00) <br />Sunday <span>Close</span></p>
                    </div>
                    <div className={styles.contactLeftRight}>
                        <h4>Phone</h4>
                        <p>+45454545</p>
                        <h4>Follow Us</h4>
                        <div className={styles.icons}>

                            <Image src={youtube} alt="youtube" height={25} width={25} className={styles.iconimg} />
                            <Image src={facebook} alt="facebook" height={25} width={25} />
                            <Image src={instagram} alt="instagram" height={25} width={25} />
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Contact