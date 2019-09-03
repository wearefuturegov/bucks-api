import Layout from "../components/Layout"
import HeroWithImage from "../components/HeroWithImage"
import hero from "./hero.jpg"
import CallToAction from "../components/CallToAction"
import NarrowCallToAction from "../components/NarrowCallToAction"
import PageBodyContent from "../components/PageBodyContent"
import CardGrid from "../components/CardGrid"
import Card from "../components/Card";
import FindSupportForm from "../components/FindSupportForm"

const HomePage = () => 
    <Layout>
        <HeroWithImage
            breadcrumbs={[
                {
                    href: "/",
                    label: "Home"
                },
                {
                    label: "Support near you"
                }
            ]}
            headline="Find support near you"
            deck="Answer a few questions to find activities and support groups in your area"
            image={hero}
            />
        <PageBodyContent
            sidebarItems={[
                {
                    label: "Paying for care",
                    href: "/"
                },                
                {
                    label: "Bucks family information service",
                    href: "/"
                },
            ]}
            >
            <FindSupportForm/>
        </PageBodyContent>
        





        {/* <CardGrid
            headline="Upcoming events"
            cards={[
                {
                    headline: "My health and wellbeing",
                    deck: "People are often worried that they won't be able to adopt because of their age or health. The reality is that few people are turned away for these reasons.",
                    href:"/"
                },
                {
                    headline: "Time and money",
                    deck: "Affording the time is often a bigger consideration for adopters than affording the costs.",
                    href:"/"
                },
                {
                    headline: "My family and background",
                    deck: "People are often worried that they won't be able to adopt because of their age or health. The reality is that few people are turned away for these reasons.",
                    href:"/"
                },
            ]}
            />
        <PageBodyContent>
            <p>Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.</p>
        </PageBodyContent>
        <NarrowCallToAction 
            headline="Come to an event"
            message="If you feel ready to take the next step, come along to hear from those who have adopted and meet our team."
            label="See upcoming events"
            href="/"
            />
        <CallToAction headline="Get in touch">
            <p>If you have any questions about adoption, you can email us at <a href="#">info@bucksadoption.buckscc.gov.uk</a> or call <strong>0796 775 7294</strong>.</p>
        </CallToAction> */}

    </Layout>


export default HomePage




