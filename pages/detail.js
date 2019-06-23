import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import fetch from "isomorphic-unfetch"
import {ColumnsWithDivider, Column} from "../components/ColumnsWithDivider"
import Button from "../components/Button"
import WrappedMap from "../components/DetailMap"
import ServiceDetailItem from "../components/ServiceDetailItem"
import CentredText from "../components/CentredText"
import ServiceSuitabilityPanel from "../components/ServiceSuitabilityPanel"

const prettyDays = (rawDays) => {
    if(rawDays.length === 7) return "Available every day"
    let prettyDays = rawDays.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + "s")
    return "Available on " + prettyDays.join(", ")
}

const DetailPage = ({service}) =>{
    let {
        name, 
        parentOrganisation, 
        venue, 
        area, 
        postcode, 
        description, 
        url, 
        phone, 
        contactName, 
        email, 
        // geo, 
        days, 
        frequency,
        suitability,
        accessibility,
        price,
        ageGroups
    } = service
    return(
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
                title={name || parentOrganisation}
                lede={description}
            />  
            <ColumnsWithDivider>
                <Column>
                    {url && <Button withBottomMargin href={url}>Visit website</Button>}
                    {(venue || area || postcode) &&
                        <ServiceDetailItem kind="place">
                            {venue && <p>{venue}</p>}
                            {area && <p>{area}</p>}
                            {postcode && <p>{postcode}</p>}
                            <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>Get directions</a>
                        </ServiceDetailItem>
                    }
                    {(days.length > 0 || frequency) &&
                        <ServiceDetailItem kind="calendar">

                            {days.length > 0 && prettyDays(days)}
                            {frequency && <p>{frequency}</p>}
                        </ServiceDetailItem>
                    }
                    {(contactName || phone || email) &&
                        <ServiceDetailItem kind="contact">
                            {contactName && <p>{contactName}</p>}
                            {phone && <p>{phone}</p>}
                            {email && <a href={`mailto:${email}`}>{email}</a>}
                        </ServiceDetailItem>                    
                    }
                </Column>
                <Column>
                    <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_CLIENT_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "400px" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        coordinates={service.geo.coordinates}
                    />
                    <em>Approximate location only. Always check the website or contact the organiser first.</em>
                </Column>
            </ColumnsWithDivider>
            <ServiceSuitabilityPanel
                accessibility={accessibility}
                ages={ageGroups}
                suitability={suitability}
                price={price}
            />
            <CentredText
                title="Is anything missing?"
                description="If there’s anything out of date or missing from this service, you can request it be updated."
            />
        </Layout>
    )
}
    

DetailPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""
    let res = await fetch(`${baseUrl}/api/services/${query.id}`)
    let service = await res.json()
    return {
        service: service.result
    }
}

export default DetailPage