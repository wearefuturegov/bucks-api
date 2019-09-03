const DetailPage = ({service}) =>{

}

DetailPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""
    let res = await fetch(`${baseUrl}/api/services/${query.id}`)
    let service = await res.json()
    return {
        service: service.result
    }
}

export default DetailPage