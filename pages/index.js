import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useState} from 'react';
import { useRouter } from 'next/router';
import { basePath } from '../next.config';
import Grid from '../components/grid'

export default function Home() {
  const router = useRouter()
  const [url, setUrl] = useState();

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  const routeGistUrl = (url) => {
    if (!url.includes("http")) {
      router.push({pathname: basePath + "/../gist/" + url});
    } else {
      const urlObj = new URL(url);
      const path = urlObj.pathname;
      router.push({pathname: basePath + "/../gist" + path});
    }
  }

  const parseGistUrl = preventDefault (() => {
    if (url != undefined) {
      routeGistUrl(url);
    }
  })

  if (router.query.url != undefined) {
    routeGistUrl(router.query.url);
  }

  if (router.query.username != undefined) {
    routeGistUrl(router.query.username);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Quantum Tracer</h1>
        <form onSubmit={parseGistUrl}>
          <input 
            placeholder="Enter GitHub gist URL or username"
            className="input" 
            id="url" 
            name="url"
            onChange={({ target }) =>
              setUrl((target).value)
            }
          />
        </form>
      </section>
      <section>
        <Grid username="guenp" />
      </section>
    </Layout>
  )
}