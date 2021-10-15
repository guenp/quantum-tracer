import Layout from '../../components/layout'
import { fetchAllGists } from '../../lib/github'
import { useRouter } from 'next/router'

const showGists = (name, gists) => {
    return (
        <Layout>
            <div className="title"><a href={"https://gist.github.com/" + name} target="_blank">{name}</a>'s gists:</div>
            <div>{gists}</div>
        </Layout>
    )
}

export default function Gists() {
    const router = useRouter();
    const {name} = router.query;
    const gists = fetchAllGists(name);
    return showGists(name, gists);
}
