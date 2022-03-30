import { default as Head } from 'next/head'
import { default as Link  } from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{"Online Spaces"}</title>
      </Head>
      <div>
        <div className="grid grid-cols-2 gap-4 h-fit p-4 w-full bg-[#488FB1]">
          <div className="align-center">
            <div className="mb-2 p-2">Online Spaces is the <strong>Perfect Place</strong> to suit all of your needs.</div>
            <div className="flex justify-center">
              <button className="btn bg-[#4FD3C4] px-4 py-2 rounded-full text-red-800 font-semibold"><Link href="./SignUp">Get Started</Link>
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/Disscussion.png"/>
          </div>
        </div>
      </div>
    </div>
  )};