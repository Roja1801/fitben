import React from 'react'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const Service = () => {
    return (
        <div className={styles.serviceout}>
            <motion.h2
                initial={{ y: -250 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            ><span>WHY </span>CHOOSE US </motion.h2>

            <div className={styles.service}>
                <motion.div className={styles.card}
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}

                    whileHover={{ scale: 1.2 }}

                >
                    <h3>Weekly Challenge</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero voluptatibus veritatis repudiandae, totam iusto amet nemo, maiores voluptatem quo aspernatur recusandae vero praesentium dolorem minima accusamus quisquam placeat! Possimus?</p>
                    <motion.h6
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                    >VIEW MORE</motion.h6>
                </motion.div>
                <motion.div className={styles.card_mid}
                    whileHover={{ scale: 1.2 }}
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Personal Trainer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero voluptatibus veritatis repudiandae, totam iusto amet nemo, maiores voluptatem quo aspernatur recusandae vero praesentium dolorem minima accusamus quisquam placeat! Possimus?</p>
                    <motion.h6
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                    >VIEW MORE</motion.h6>
                </motion.div>
                <motion.div className={styles.card}
                    whileHover={{ scale: 1.2 }}

                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Group classes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero voluptatibus veritatis repudiandae, totam iusto amet nemo, maiores voluptatem quo aspernatur recusandae vero praesentium dolorem minima accusamus quisquam placeat! Possimus?</p>
                    <motion.h6
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                    >VIEW MORE</motion.h6>
                </motion.div>

            </div>

        </div>
    )
}

export default Service