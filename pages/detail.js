import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import HeroWithColor from "../components/HeroWithColor"
import CallToAction from "../components/CallToAction"
import Link from "next/link"
import fetch from "isomorphic-unfetch"
import PageBodyContent from "../components/PageBodyContent"
import TickList from "../components/TickList"
import { ButtonLink } from "../components/Button"
import { prettyDays } from "../lib/utils"
import Head from "next/head"
import ShareDialog from "../components/ShareDialog"
import DetailMap from "../components/Maps/DetailMap"

const Outer = styled.div`
    padding: 40px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 70px 20px;
    }
`

const Columns = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 80px;
    }
`

const StyledButtonLink = styled(ButtonLink)`
    margin-bottom: 20px;
`

const Disclosure = styled.p`
    font-size: 1.1em;
    line-height: 1.6;
    color: ${theme.lightText};
`

const DetailItem = styled.div`
    font-size: 1.1em;
    color: ${theme.darkText};
    margin-top: 25px;
    word-break: break-word;
    line-height: 1.6;
    a{
        color: ${theme.link};
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};               
        }
    }
`

const DetailPage = ({
    service
}) => {
    let {
        name, 
        parentOrganisation, 
        venue, 
        area, 
        postcode, 
        category,
        description, 
        url, 
        phone, 
        contactName, 
        email, 
        geo, 
        days, 
        frequency,
        suitability,
        accessibility,
        price,
        ageGroups
    } = service

    return(
        <Layout>
            <Head>
                <title>{(name || parentOrganisation)} | Find support near you | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content={(name || parentOrganisation)} />
                <meta property="og:description" content="See more information about clubs, activities and support in your area." />
            </Head>
            <HeroWithColor
                headline={name || parentOrganisation}
                deck={description}
                category={category}
                breadcrumbs={[
                    {
                        href: "/",
                        label: "Home",
                    },
                    {
                        href: "/",
                        label: "Support near you"
                    },
                    {
                        label: "Service detail"
                    }
                ]}
            />
            <Outer>
                <Columns>
                    <article>
                        {url && <StyledButtonLink href={service.url} target="blank">Visit website</StyledButtonLink>}
                        <Disclosure><em>You may need a referral for some activities and groups. Contact the organiser if unsure.</em></Disclosure>
                        {(venue || area || postcode) &&
                            <DetailItem>
                                <h3>Where</h3>
                                {venue && <p>{venue}</p>}
                                {area && <p>{area}</p>}
                                {postcode && <p>{postcode}</p>}
                                <a href={`https://www.google.com/maps/place/${service.postcode}/@${service.geo.coordinates[1]},${service.geo.coordinates[0]},15z`}>Get directions</a>
                            </DetailItem>
                        }
                        {(days.length > 0 || frequency) &&
                            <DetailItem>
                                <h3>When</h3>
                                {days.length > 0 && prettyDays(days)}
                                {frequency && <p>{frequency}</p>}
                            </DetailItem>
                        }
                        {(contactName || phone || email) &&
                            <DetailItem>
                                <h3>Contact</h3>
                                {contactName && <p>{contactName}</p>}
                                {phone && <p>{phone}</p>}
                                {email && <a href={`mailto:${email}`}>{email}</a>}
                            </DetailItem>                    
                        }
                    </article>
                    <aside>
                        <ShareDialog singleService/>
                        <DetailMap
                            // category={category}
                            coordinates={geo.coordinates}
                        />
                    </aside>

                </Columns>
            </Outer>
            <TickList
                accessibility={accessibility}
                ages={ageGroups}
                suitability={suitability}
                price={price}
            />
            <CallToAction headline="Is anything missing?">
                <p>If there’s anything out of date or missing from this service, you can <Link href={`/feedback?category=amend&serviceId=${service.assetId}`}><a>request it be updated.</a></Link></p>
            </CallToAction>
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