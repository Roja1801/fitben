import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Contact from './contact'
import Service from './service'
import Welcome from './welcome'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FITBEN</title>
        <meta name="description" content="Gym and Fitness Training Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <About />
      <Service />
      <Contact />

    </div>
  )
}
