import Layout from '../components/layout'
import { fetchAllFiles } from '../lib/github'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Files() {
    const router = useRouter();
    const {id} = router.query;
    
    useEffect(() => {
        console.log('ID')
        console.log(id)
      }, [])

    if (!router.isReady) return <div>loading...</div>
    else {
        const name = id[0];
        const gistId = id[1];
        const files = fetchAllFiles(gistId);
        return (
            <Layout>
                Hi {name}!
                {/* {files} */}
            </Layout>
        )
    }
}
