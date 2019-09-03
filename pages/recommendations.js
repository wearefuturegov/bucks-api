const RecommendationsPage = ({}) => {
}

RecommendationsPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : ""    
    const endpoints = [
        `${baseUrl}/api/services?${queryString.stringify(query)}`,
        `${baseUrl}/api/snippets?${queryString.stringify(query)}`
    ]
    let promises = await Promise.all(endpoints.map(endpoint =>
        fetch(endpoint).then(res => res.json())
    ))
    let [services, snippets] = promises
    return {
        services: services.results,
        snippets: snippets.results,
        query: query,
        totalServices: services.count,
        totalPages: services.pages
    }
}

export default RecommendationsPage