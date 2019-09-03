import Layout from "../components/Layout"
import HeroWithImage from "../components/HeroWithImage"
import hero from "../images/hero.jpg"

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


        Testing
    </Layout>


export default HomePage




