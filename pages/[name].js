import Layout from '../components/layout'
import { fetchAllGists } from '../lib/github'
import { useRouter } from 'next/router'


export default function Gists() {
    const router = useRouter();
    const {name} = router.query;
    const gists = fetchAllGists(name);
    return (
        <Layout>
            Hi {name}!
            <div>{gists}</div>
        </Layout>
    )
}
