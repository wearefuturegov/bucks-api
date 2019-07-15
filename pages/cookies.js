import Layout from "../components/Layout"
import Head from "next/head"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"
import "./cookies.scss"

const CookiesPage = () =>{

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Cookies | Care and support for adults | Buckinghamshire County Council</title>
                <meta property="og:title" content="Cookies" />
            </Head>
            <PageHeader 
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Cookies"
                    },
                ]}
                title="Cookies on this website"
                lede="Learn about the cookies we use and control your settings"
            />  

            <div className="container">
                <div className="two-thirds">
                    <p>This website stores small files called cookies on your computer to:</p>
                    <ul>
                        <li>make it easier for you to use</li>
                        <li>help us improve it</li>
                    </ul>
                    <p>We use three kinds of cookie:</p>

                    <h2>Cookies that are needed for the website to work</h2>
                    <p>These cookies are vital for the website to work. For example, recording whether you accept this statement.</p>

                    <h2>Cookies that improve your experience</h2>
                    <p>These cookies do things like record services that you have favourited, so you can see them first when you open the website later on the same device.</p>

                    <h2>Cookies that measure website use</h2>
                    <p>We use Google Analytics to understand how people are using this website, so we can keep improving it.</p>
                    <p>They record things like:</p>
                    <ul>
                        <li>how you got to this website</li>
                        <li>which pages you visit, and how long you spend on them</li>
                        <li>how you interact with pages, such as the buttons you click</li>
                    </ul>
                    <p>We don't let Google use or share the data about how you use this site. </p>

                    <h2>External services</h2>
                    <p>This website links to external websites which we don't control. They may use extra cookies not covered here.</p>
                </div>
            </div>



        </Layout>
    )
}

export default CookiesPage