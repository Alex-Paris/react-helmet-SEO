import Head from 'next/head'
import styles from '../styles/Home.module.css'

export function Header() {
  const test = "teste secundarionrrrrr"

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content={test} />
      </Head>
    </div>
  )
}
