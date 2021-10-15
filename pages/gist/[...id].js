import Layout from '../../components/layout'
import { fetchAllFiles } from '../../lib/github'
import { useRouter } from 'next/router'
import { basePath } from '../../next.config'

const showGistContents = (name, gistId, files) => {
    return (
        <Layout>
            <div className="title">
                <a href={basePath + "/gist/" + name}>{name}</a>'s gist:
                <pre>
                    <a href={"https://gist.github.com/" + name + "/" + gistId}>{gistId}</a>
                </pre>
            </div>
            <div id="quantum-viz" className="trace"></div>
            {files}
        </Layout>
    )
}

export default function Files() {
    const router = useRouter();
    const {id} = router.query;
    const files = fetchAllFiles(id);
    if (router.isReady) {
        return showGistContents(id[0], id[1], files);
    } else {
        return (
            <div className="loading">
                loading gist...
            <style jsx>{`
            .loading {
                padding: 50px;
            }
            `}</style>
            </div>
        )
    }
}
