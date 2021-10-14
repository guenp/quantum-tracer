import Link from "next/link";
import useSWR from "swr";

const  BASE_URL = 'https://api.github.com';

const getAllGistUrl = (username) => {
    return `${BASE_URL}/users/${username}/gists`;
}

const getSingleGistUrl = (gistId) => {
    return `${BASE_URL}/gists/${gistId}`
}

const gistPageUrl = (username, gistId) => {
    return `${username}/${gistId}`
}

const fetcher = (url) => fetch(url).then((r) => r.json());

const fetchAllGists = (username) => {
    const { data: gists = [], error } = useSWR(
        getAllGistUrl(username), fetcher);
    if (error) return <div>Failed to load gists</div>;
    if (!gists.length) return <div>loading...</div>;
    return gists.map((gist) =>  (
        <div key={gist.id}>
            <a href={gistPageUrl(gist.owner.login, gist.id)}> {gist.description}</a>
        </div>
    ))
}

const fetchAllFiles = (gistId) => {
    const { data: files = [], error } = useSWR(
        getSingleGistUrl(gistId), fetcher);
    console.log(files);
    if (error) return <div>Failed to load files</div>;
    if (!files.length) return <div>loading...</div>;
    return files.map((file) =>  (
        <div key={file.id}>
            {file.name}
        </div>
    ))
}

export {fetchAllGists, fetchAllFiles};
