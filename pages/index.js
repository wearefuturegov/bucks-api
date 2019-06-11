import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CardGrid from '../components/CardGrid'
import PromoGrid from '../components/PromoGrid'
import WideCallToActionPanel from '../components/WideCallToActionPanel'

const Home = () =>
    <Layout>
        <Hero
            title="Support and care for adults, their families and carers"
            description="Helping you find the right information and support in Buckinghamshire."
            menuItems={[
                {
                    href: "#",
                    text: "Information and advice"
                },
                {
                    href: "/recommendations",
                    text: "All services"
                },
                {
                    href: "#",
                    text: "Log in"
                },
                {
                    href: "#",
                    text: "Sign up"
                },
            ]}
            ctaTitle="Find services in your area"
            ctaDescription="Get an idea of what help is available by answering these questions."
            ctaHref="/explore-your-needs"
            ctaLinkText="Explore your needs"
            />
        <CardGrid
            afterHero
            title="Information and advice"
            cards={[
                {
                    title: "Getting equipment",
                    description: "You may be able to adapt your home or get special equipment to make life easier.",
                    image: "https://picsum.photos/300/200?random=1",
                    href: "#"
                },
                {
                    title: "Keeping yourself safe",
                    description: "Get help with concerns around abuse or neglect, and how to identify and report it.",
                    image: "https://picsum.photos/300/200?random=2",
                    href: "#"
                },
                {
                    title: "Getting help at home",
                    description: "You could be able to get help with everyday tasks like washing, dressing or making dinner.",
                    image: "https://picsum.photos/300/200?random=3",
                    href: "#"
                },
                {
                    title: "Who pays?",
                    description: "Understand what different kinds of care cost, and the level of financial help available",
                    image: "https://picsum.photos/300/200?random=4",
                    href: "#"
                },
                {
                    title: "Worried about someone else?",
                    description: "Get practical tips to help out a neighbour or loved one, or, if it’s an emergency, tell us about someone in immediate need",
                    image: "https://picsum.photos/300/200?random=5",
                    href: "#"
                },
                {
                    title: "Coping with loneliness",
                    description: "Most people will feel lonely at some point in their lives. It’s a deeply personal experience that - in most cases - will thankfully pass.",
                    image: "https://picsum.photos/300/200?random=6",
                    href: "#"
                }
            ]}
            />
        <WideCallToActionPanel
            title="In an emergency"
            description="If you need to speak to someone urgently about a vulnerable adult, call us."
            linkText="Get emergency help"
            href="#"
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

export default Home