import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Quantum Tracer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quantum Tracer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {children}
      </div>

      <div className={styles.footer}>
        <a
          href="https://microsoft.com/quantum"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img src="/quantum.png" alt="Microsoft Azure Quantum" className={styles.logo} />
        </a>
      </div>
    </div>
  )
}