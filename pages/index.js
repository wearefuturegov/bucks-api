import React from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import NeedsExplorerQuestions from "../components/NeedsExplorerQuestions"

const ExploreYourNeedsPage = () => {
    return(
        <Layout withHeader withUsefulOverlap withFooter>
            <Head>
                <title>Find support near you | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content="Find activities, groups and services near you" />
                <meta property="og:description" content="Answer a few questions and we'll suggest recommendations in your area." />
            </Head>
            <PageHeader 
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Find support near you"
                    },
                ]}
                title="Find activities, groups and services near you"
                lede="Answer a few questions and we'll suggest recommendations in your area"
            />
            <NeedsExplorerQuestions />
        </Layout>
    )
}

export default ExploreYourNeedsPage




