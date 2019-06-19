import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'
import {ColumnsWithDivider, Column} from '../components/ColumnsWithDivider'
import Button from '../components/Button'
import WrappedMap from '../components/DetailMap'

const DetailPage = ({service, apiKey}) =>
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

                <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>See directions</a>

                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    coordinates={service.geo.coordinates}
                    />

            </Column>
        </ColumnsWithDivider>

    </Layout>

DetailPage.getInitialProps = async ({req}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    let res = await fetch(`${baseUrl}/api/services/${req.params.id}`)
    let service = await res.json()
    return {
        service: service.result,
        apiKey: process.env.GOOGLE_CLIENT_KEY
    }
}

export default DetailPage