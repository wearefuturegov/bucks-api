import Layout from "../components/Layout"
import Hero from "../components/Hero"
import CardGrid from "../components/CardGrid"
import PromoGrid from "../components/PromoGrid"
import WideCallToActionPanel from "../components/WideCallToActionPanel"

import i1 from "../images/1.jpg"
import i2 from "../images/2.jpg"
import i3 from "../images/3.jpg"
import i4 from "../images/4.jpg"
import i5 from "../images/5.jpg"
import i6 from "../images/6.jpg"

const HomePage = () =>
    <Layout withUseful withFooter>
        <Hero
            title="Support and care for adults, their families and carers"
            description="Helping you find the right information and support in Buckinghamshire."
            ctaTitle="Find activities, groups and services near you"
            ctaDescription="Answer a few questions and we'll suggest recommendations in your area"
            ctaHref="/explore-your-needs"
            ctaLinkText="Get started"
        />
        <CardGrid
            afterHero
            title="Information and advice"
            cards={[
                {
                    title: "Getting equipment",
                    description: "You may be able to adapt your home or get special equipment to make life easier: pendant alarms, railings, wheelchairs...",
                    image: i1,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1156"
                },
                {
                    title: "Identifying your care and support needs",
                    description: "You could be able to get help with everyday tasks like washing, dressing, getting hot meals delivered.",
                    image: i2,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1237"
                },
                {
                    title: "Considering your care and support options",
                    description: "Understand care and support options that are relevant in your situation.",
                    image: i3,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1229"
                },
                {
                    title: "Worried about someone else?",
                    description: "If you're worried that someone you know is being neglected or abused, let us know right away.",
                    image: i5,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1566"
                },
                {
                    title: "Who pays?",
                    description: "Understand what different kinds of care cost, and the level of financial help available",
                    image: i4,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1545"
                },
                {
                    title: "Coping with loneliness",
                    description: "Most people will feel lonely at some point in their lives. It’s a deeply personal experience that - in most cases - will thankfully pass.",
                    image: i6,
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1134"
                }
            ]}
        />
        <WideCallToActionPanel
            title="In an emergency"
            description="If you need to speak to someone urgently about a vulnerable adult, call us."
            linkText="Get emergency help"
            href="https://www.buckscc.gov.uk/services/care-for-adults/advice-for-vulnerable-adults/"
        />
        <PromoGrid
            title="Life events"
            promos={[
                {
                    title: "Needing extra care support at home",
                    description: "Get help and support if you need to go into adult social care",
                    href: "#"
                },
                {
                    title: "Looking after someone else",
                    description: "Get help and support if you’re looking after someone",
                    href: "#"
                },
                {
                    title: "Coping with disability",
                    description: "Get help and support if you’ve been diagnosed with a disability",
                    href: "#"
                },
                {
                    title: "After a diagnosis or hospital stay",
                    description: "Plan for your care after a hospital stay and recovery at home",
                    href: "#"
                },
                {
                    title: "Losing a loved one",
                    description: "Get support after you’ve lost a loved one",
                    href: "#"
                },
                {
                    title: "End of life",
                    description: "Plan end of life care for you or a loved one",
                    href: "#"
                },

                {
                    title: "Retiring",
                    description: "Find activities in your area and get support in your retirement ",
                    href: "#"
                },
                {
                    title: "Moving from child to adult social care",
                    description: "Support someone moving from child to adult social care",
                    href: "#"
                },
                {
                    title: "Moving into and out of Buckinghamshire",
                    description: "Find out how to keep getting support if you’re moving to or from another local authority ",
                    href: "#"
                },
            ]}
        />
    </Layout>

export default HomePage