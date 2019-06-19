# Buckinghamshire adult social care

An app for the Buckinghamshire adult social care project. It provides a needs explorer interface leading to a personalised list of advice articles and local community services.

It consists of:

* an isomorphic front-end [next.js](https://nextjs.org/) app
* an API driven by a mongodb database

## Prerequisites

* node/npm
* a running mongodb database

## Running it locally

1. Clone the repo
2. Create a `.env` file in the root of the repository and fill in the variables:
    * `MONGODB_URI`
    * `FOREST_ENV_SECRET`
    * `FOREST_AUTH_SECRET`
    * `GOOGLE_API_KEY` with the geocoding API enabled
3. `npm install`
4. `npm run dev`
5. Optionally, [seed the database](#database-seeds)

The app will be available on port 3000.

## Deploying to the web

The app is intended to run on Heroku.

1. Push master to a new Heroku app
2. Provision a mongodb database add-on. [mLab](https://elements.heroku.com/addons/mongolab) works well
3. Optionally, [seed the database](#database-seeds)

## Database seeds

The app has a seed script to populate the database of services from a CSV data file.

1. Put `data.csv` in the /lib folder
2. Run `npm run seed`

## Style guide

[![Netlify Status](https://api.netlify.com/api/v1/badges/e0800365-0ae7-46de-8f36-88ce085da6f4/deploy-status)](https://app.netlify.com/sites/bucks-care-style-guide/deploys)

The app has a living style guide of React components built with Storybook.

To spin it up in dev mode, run `npm run storybook`.

Pushes to master are built to [this static HTML site](http://bucks-care-style-guide.netlify.com/).

## API endpoints

The services API at `/api/services` can be filtered and sorted:

* `category[]=`... will provide services that match *any* of the supplied categories
* `keywords[]=`... will provide services that have *any* of the supplied keywords
* `page=` plus an integer will skip through the results, 10 at a time
* `ages=`, plus either `Young people`, `Young adults` or `Older adults` will filter to services matching *only* the given value
* `near=`, plus a location string will attempt to convert the string into a lat/long and sort results by distance from that, unless...
* `lat=` and `long=` are explicitly provided, then they will be used directly instead

* `accessibility[]=`... will provide services that match only *all* of the supplied values
* `days[]=`... will provide services that match *any* of the supplied days
* `evening=true` will restrict results to those happening at evenings and weekends only