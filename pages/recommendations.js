import Layout from "../components/Layout"
import fetch from "isomorphic-unfetch"

const RecommendationsPage = () => 
    <Layout>
        Recommendations
    </Layout>

RecommendationsPage.getInitialProps = async ({ req, query }) =>{

    let lat
    let lng
    if(!parseFloat(query.lat) || !parseFloat(query.lng)){
        let res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query.location}, Buckinghamshire&region=uk&key=${process.env.GOOGLE_API_KEY}`)
        let data = await res.json()
        lat = data.results[0].geometry.location.lat
        lng = data.results[0].geometry.location.lng
    } else {
        lat = query.lat
        lng = query.lng
    }

    console.log(lat, lng)

    return {

    }
}

export default RecommendationsPage