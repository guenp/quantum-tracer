import styles from './github.module.css'
import useSWR from "swr";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { basePath } from '../next.config';

const BASE_URL = 'https://api.github.com';
const CIRCUIT_JSON = 'circuit.json';
const README_FILE = 'README.md';
const PRE_RENDERED_FILES = [CIRCUIT_JSON, README_FILE];

const loading = (
    <div className="loading">
        loading gist...
    <style jsx>{`
    .loading {
        padding: 50px;
    }
    `}</style>
    </div>
);

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

const fetchGists = (username, formatter) => {
    const { data: gists = [], error } = useSWR(
        getAllGistUrl(username), fetcher);
    if (error) return <div>Failed to load gists</div>;
    if (!gists.length) return loading;

    function isQuantumProgram(gist) {
        return CIRCUIT_JSON in gist.files;
    }

    const quantumPrograms = gists.filter(isQuantumProgram);
    if (!quantumPrograms.length) {
        return <div>No gists found! <a href="https://gist.github.com/">Create a new gist</a>.</div>
    }

    return quantumPrograms.map(formatter);
}

const fetchAllFiles = (gistId) => {
    // Load gist with circuit JSON and draw in quantum-viz element
    const { data: gist = {}, error } = useSWR(
        gistId ? getSingleGistUrl(gistId[1]) : null, fetcher);
    useEffect(() => {
        import("@microsoft/quantum-viz.js")
            .then(function (qviz) {
                if (error) return;
                if (!gist.files) return;
                if (Object.keys(gist.files).includes(CIRCUIT_JSON)) {
                    const file = gist.files[CIRCUIT_JSON];
                    const qvizElem = document.getElementById("quantum-viz");
                    const circuit = JSON.parse(file.content);
                    qviz.draw(circuit, qvizElem, qviz.STYLES['Default'])
                }
            })
    });

    // Show error or loading message depending on response
    if (error) return <div>Failed to load gist</div>;
    if (!gist.files) return loading;

    var files = [];

    // Add readme
    if (Object.keys(gist.files).includes(README_FILE)) {
        const readme_file = gist.files[README_FILE];
        files.push(
            <div key={README_FILE} className={styles.readme}>
                <ReactMarkdown>{readme_file.content}</ReactMarkdown>
            </div>
        )
    }

    files.push(Object.keys(gist.files).map(
        function(key) {
            const file = gist.files[key];
            if (!PRE_RENDERED_FILES.includes(file.filename)) {
                if (file.filename.match(/.(jpg|jpeg|png|gif)$/i)) {
                    return (
                        <div key={key}>
                            <a href={file.raw_url}><img src={file.raw_url}/></a>
                        </div>
                    )
                } else {
                    return (
                        <div key={key}>
                            <a href={file.raw_url}>{file.filename}</a>
                        </div>
                    )
                }
            }
        }
    ));
    return files;
}

export {fetchGists, fetchAllFiles};
