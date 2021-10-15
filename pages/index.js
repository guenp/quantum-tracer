import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useState} from 'react';
import { useRouter } from 'next/router';
import { basePath } from '../next.config';

export default function Home() {
  const router = useRouter()
  const [url, setUrl] = useState();
  const [username, setUsername] = useState();

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  const routeGistUrl = (url) => {
    router.push({pathname: basePath + "/../gist/" + url.replace("https://gist.github.com/", "")});
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