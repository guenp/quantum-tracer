import styles from './github.module.css'
import useSWR from "swr";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { basePath } from '../next.config';

const  BASE_URL = 'https://api.github.com';

const getAllGistUrl = (username) => {
    return `${BASE_URL}/users/${username}/gists`;
}

const getSingleGistUrl = (gistId) => {
    return `${BASE_URL}/gists/${gistId}`
}

const gistPageUrl = (url) => {
    return `${basePath}?url=${url}`
}

const fetcher = (url) => fetch(url).then((r) => r.json());

const fetchAllGists = (username) => {
    const { data: gists = [], error } = useSWR(
        getAllGistUrl(username), fetcher);
    if (error) return <div>Failed to load gists</div>;
    if (!gists.length) return <div>loading...</div>;
    return gists.map((gist) => (
        <div key={gist.id}>
            <a href={gistPageUrl(
                "https://gist.github.com/" + username + "/" + gist.id
            )}> {gist.description}</a>
        </div>
    ))
}

const fetchAllFiles = (gistId) => {
    const { data: gist = {}, error } = useSWR(
        gistId ? getSingleGistUrl(gistId[1]) : null, fetcher);
    useEffect(() => {
        import("@microsoft/quantum-viz.js")
            .then(function (qviz) {
                if (error) return <div>Failed to load gist</div>;
                if (!gist.files) return <div>loading...</div>;
                return Object.keys(gist.files).map(
                    function(key) {
                        const file = gist.files[key];
                        const el = document.getElementById("qvizid");
                        if ("circuit.json" == file.filename) {
                            const circuit = JSON.parse(file.content);
                            qviz.draw(circuit, el, qviz.STYLES['Default'])
                        }
                    }
                )
            })
    });

    if (error) return <div>Failed to load gist</div>;
    if (!gist.files) return <div>loading...</div>;
    return Object.keys(gist.files).map(
        function(key) {
            const file = gist.files[key];
            if ("README.md" == file.filename) {
                return (
                    <div key={key} className={styles.readme}>
                        <ReactMarkdown>{file.content}</ReactMarkdown>
                    </div>
                )
            }
            if ("circuit.json" != file.filename) {
                return (
                    <div key={key}>
                        <a href={file.raw_url}>{file.filename}</a>
                    </div>
                )
            }
        }
    )
}

export {fetchAllGists, fetchAllFiles};
