import Head from "next/head"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"


const FeedbackPage = () => {

    return(
        <Layout withHeader withFooter>
            <Head>
                <title>Feedback | Care and support for adults | Buckinghamshire County Council</title>
            </Head>
            <PageHeader 
                reducedBottomPadding
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Feedback"
                    },
                ]}
                title="Give feedback"
                lede="Give feedback on this website"
            />

            <form action="/api/feedback" method="post" className="container">

                <input name="category" type="hidden" value=""/>
                <input name="serviceId" type="hidden" value=""/>

                <fieldset>
                    <legend>Were you able to do what you needed today?</legend>

                    <label htmlFor="satisfied-yes">Yes</label>
                    <input id="satisfied-yes" type="radio" required="true" name="satisfied" value="yes"/>
                    
                    <label htmlFor="satisfied-somewhat">Somewhat</label>
                    <input id="satisfied-somewhat" type="radio" required="true" name="satisfied" value="somewhat"/>

                    <label htmlFor="satisfied-no">No</label>
                    <input id="satisfied-no" type="radio" required="true" name="satisfied" value="no"/>

                </fieldset>


                <label htmlFor="message">How can we improve this website?</label>
                <textarea id="message" type="text" required="true" name="message"></textarea>
                <br/>

                <label htmlFor="email">Your email address</label>
                <input id="email" type="text" required="true" name="email"/>
                <br/>

                <label htmlFor="phone">Your phone number</label>
                <input id="phone" type="text" required="true" name="phone"/>

                <Button>Send feedback</Button>


            </form>

        </Layout>
    )
}


export default FeedbackPage