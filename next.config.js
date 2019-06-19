const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")
const withImages = require("next-images")

module.exports = withImages(
    withSass(
        withCSS({
            sassLoaderOptions: {
                includePaths: []
            },
            webpack: function (cfg) {
                const originalEntry = cfg.entry
                cfg.entry = async () => {
                    const entries = await originalEntry()
                    if (
                        entries["main.js"] &&
            !entries["main.js"].includes("./lib/polyfills.js")
                    ) {
                        entries["main.js"].unshift("./lib/polyfills.js")
                    }
                    return entries
                }
                return cfg
            }
        })
    )
)


