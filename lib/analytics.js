import ReactGA from "react-ga"

export const initGA = () => {
    // console.log("GA init")
    ReactGA.initialize(process.env.GOOGLE_TRACKING_ID)
}

export const logPageView = () => {
    console.log(`Logging pageview for ${window.location.search}`)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export const logEvent = (category = "", action = "") => {
    if (category && action) {
        ReactGA.event({ category, action })
    }
}

export const logException = (description = "", fatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal })
    }
}