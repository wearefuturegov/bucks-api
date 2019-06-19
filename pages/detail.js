import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'
import {ColumnsWithDivider, Column} from '../components/ColumnsWithDivider'
import Button from '../components/Button'

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

const WrappedMap = withScriptjs(withGoogleMap((props)=>
        <GoogleMap defaultZoom={16} defaultCenter={{
            lat: props.coordinates[1], 
            lng: props.coordinates[0]
        }}>
            <Marker position={{
                lat: props.coordinates[1], 
                lng: props.coordinates[0]
            }}/>

        </GoogleMap>
    ))


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