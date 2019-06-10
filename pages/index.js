import Layout from '../components/Layout'
import Hero from '../components/Hero'

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
                    href: "/explore-your-needs",
                    text: "Explore your needs"
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
            />
    </Layout>

export default Home