import Layout from '../../components/layout'
import { fetchAllFiles } from '../../lib/github'
import { useRouter } from 'next/router'

const renderGistContents = (name, gistId, files) => {
    return (
        <Layout>
            {name}'s quantum program {gistId}
            <div id="qvizid"></div>
            {files}
        </Layout>
    )
}

export default function Files() {
    const router = useRouter();
    const {id} = router.query;
    const files = fetchAllFiles(id);
    if (router.isReady) {
        return renderGistContents(id[0], id[1], files);
    } else {
        return <div>loading...</div>
    }
}

export {renderGistContents};
