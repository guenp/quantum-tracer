import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import Grid from '../../components/grid'

export default function Gists() {
    const router = useRouter();
    const {name} = router.query;
    return (
        <Layout>
            <div className="title"><a href={"https://gist.github.com/" + name} target="_blank">{name}</a>'s gists:</div>
            <section>
                <Grid username={name} />
            </section>
        </Layout>
    )
}
