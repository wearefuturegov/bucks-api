import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'
import {ColumnsWithDivider, Column} from '../components/ColumnsWithDivider'
import Button from '../components/Button'

const DetailPage = ({service}) =>
    <Layout withHeader>
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
            title={service.name || service.parentOrganisation}
            lede={service.description}
            />  

        <ColumnsWithDivider>
            <Column>
                {service.url && <Button href={service.url}>Visit website</Button>}
            </Column>
            <Column>
                map goes here
                {service.geo.coordinates}
            </Column>
        </ColumnsWithDivider>

    </Layout>

DetailPage.getInitialProps = async ({req}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    let res = await fetch(`${baseUrl}/api/services/${req.params.id}`)
    let service = await res.json()
    return {
        service: service.result
    }

}

export default DetailPage