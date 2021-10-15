import Layout from '../../components/layout'
import { fetchAllGists } from '../../lib/github'
import { useRouter } from 'next/router'

const showGists = (name, gists) => {
    return (
        <Layout>
            {name}'s gists:
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
