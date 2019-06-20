import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import fetch from 'isomorphic-unfetch'
import {ColumnsWithDivider, Column} from '../components/ColumnsWithDivider'
import Button from '../components/Button'
import WrappedMap from '../components/DetailMap'
import ServiceDetailItem from '../components/ServiceDetailItem';

const prettyDays = (rawDays) => {
    let prettyDays = rawDays.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + "s")
    return "On " + prettyDays.join(", ")
}

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
                {service.url && <Button withBottomMargin href={service.url}>Visit website</Button>}

                <ServiceDetailItem kind="place">
                    {service.venue && <p>{service.venue}</p>}
                    {service.area && <p>{service.area}</p>}
                    {service.postcode && <p>{service.postcode}</p>}
                    <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>See directions</a>
                </ServiceDetailItem>

                <ServiceDetailItem kind="calendar">
                    {service.days && prettyDays(service.days)}
                    {service.frequency && <p>{service.frequency}</p>}
                    {/* {service.daytime && <p>{service.daytime}</p>} */}
                </ServiceDetailItem>

                <ServiceDetailItem kind="contact">
                    {service.contactName && <p>{service.contactName}</p>}
                    {service.phone && <p>{service.phone}</p>}
                    {service.email && <a href={`mailto:${service.email}`}>{service.email}</a>}
                </ServiceDetailItem>


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

DetailPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    let res = await fetch(`${baseUrl}/api/services/${query.id}`)
    let service = await res.json()
    return {
        service: service.result,
        apiKey: process.env.GOOGLE_CLIENT_KEY
    }
}

export default DetailPage