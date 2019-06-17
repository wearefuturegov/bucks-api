import Layout from '../components/Layout'
import NeedsExplorerHero from '../components/NeedsExplorerHero'

const Home = () =>
    <Layout>
        <NeedsExplorerHero
            title="Find people and services near you"
            description="Answer a few questions to find activities and support groups in your area"
            menuItems={[
                {
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1228",
                    text: "Information and advice"
                },
                {
                    href: "/recommendations",
                    text: "All services"
                },
                {
                    href: "https://www.careadvicebuckinghamshire.org/s4s/Auth",
                    text: "Log in"
                },
                {
                    href: "https://www.careadvicebuckinghamshire.org/s4s/WhereILive/Council?pageId=1636",
                    text: "Sign up"
                },
            ]}
            />

        <form method="get" action="/recommendations">

            <p>What are you interested in?</p>
            <input type="checkbox" name="category" value="active" id="c1" />
            <label htmlFor="c1">Staying active</label>
            <br/>
            <input type="checkbox" name="category" value="support" id="c2"/>
            <label htmlFor="c2">Support</label>
            <br/>
            <input type="checkbox" name="category" value="cultural" id="c3"/>
            <label htmlFor="c3">Cultural</label>
            <br/>
            <input type="checkbox" name="category" value="social" id="c4"/>
            <label htmlFor="c4">Socialising</label>
            <br/>
            <input type="checkbox" name="category" value="learning" id="c5"/>
            <label htmlFor="c5">Learning new things</label>
            <br/>

            <br/>

            {/* <p>What are you interested in?</p>
            <input type="checkbox" name="keywords" value="caring" id="k1"/>
            <label htmlFor="k1">Looking after someone</label>
            <br/>
            <input type="checkbox" name="keywords" value="housework" id="k2"/>
            <label htmlFor="k2">Housework</label>
            <br/>

            <br/>

            <p>What's your age group?</p>
            <input type="radio" name="keywords" value="caring" id="k1"/>
            <label htmlFor="k1">Young people</label>
            <br/>
            <input type="radio" name="keywords" value="housework" id="k2"/>
            <label htmlFor="k2">Older adults</label>
            <br/>

            <br/>

            <label htmlFor="near">Where are you</label>
            <input type="text" name="near"></input>
            <br/> */}

            <button type="submit">see your recommendations</button>

        </form>


        test
    </Layout>

export default Home