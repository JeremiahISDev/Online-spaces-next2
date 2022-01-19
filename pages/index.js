import { default as Head } from 'next/head'
import { default as Image } from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{"Online Spaces"}</title>
      </Head>
    </div>
  )};