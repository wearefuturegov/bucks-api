require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")
const withImages = require("next-images")

module.exports = withImages(
    withSass(
        withCSS({
            sassLoaderOptions: {
                includePaths: []
            },
            webpack: function (config) {

                // Include polyfills
                const originalEntry = config.entry
                config.entry = async () => {
                    const entries = await originalEntry()
                    if (entries["main.js"] && !entries["main.js"].includes("./lib/polyfills.js")) {
                        entries["main.js"].unshift("./lib/polyfills.js")
                    }
                    return entries
                }

                // Include environment vars
                config.plugins = config.plugins || []
                config.plugins = [
                  ...config.plugins,
                  // Read the .env file
                  new Dotenv({
                    path: path.join(__dirname, '.env'),
                    systemvars: true
                  })
                ]

                return config


            }
        })
    )
)


