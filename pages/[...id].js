import Layout from '../components/layout'
import { fetchAllFiles } from '../lib/github'
import { useRouter } from 'next/router'


export default function Files() {
    const router = useRouter();
    const {id} = router.query;
    const files = fetchAllFiles(id);
    if (router.isReady) {
        return (
            <Layout>
                Hi {id[0]}!
                <div id="qvizid"></div>
                {files}
            </Layout>
        )
    } else {
        return <div>loading...</div>
    }
}
