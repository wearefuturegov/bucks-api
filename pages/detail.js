import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'

const Detail = ({service}) =>
    <Layout withHeader>
        {console.log(service)}
        <PageHeader 
            breadcrumbs={[
                {
                    title: "Care for adults",
                    href: "/"
                },
                {
                    title: "Service detail"
                },
            ]}
            title={service.name}
            />  
    </Layout>

Detail.getInitialProps = async ({req}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    let res = await fetch(`${baseUrl}/api/services/${req.params.id}`)
    let service = await res.json()
    console.log(service)
    return {
        service: service.result
    }

}

export default Detail