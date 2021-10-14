import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useState} from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const [url, setUrl] = useState();

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  const parseGistUrl = preventDefault (() => {
    if (url != undefined) {
      router.push({pathname: url.replace("https://gist.github.com/", "")});
    }
  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <form onSubmit={parseGistUrl}>
          <input 
            placeholder="Gist URL or username"
            className="input" 
            id="url" 
            name="url"
            onChange={({ target }) =>
              setUrl((target).value)
            }
          />
        </form>
      </section>
    </Layout>
  )
}