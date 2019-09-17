# Find support near me

[![CircleCI](https://circleci.com/gh/wearefuturegov/bucks/tree/master.svg?style=svg)](https://circleci.com/gh/wearefuturegov/bucks/tree/master)

An app for the Buckinghamshire adult social care project. It provides the find support near me tool, leading to a personalised list of advice articles and local community services.


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
    * `GOOGLE_CLIENT_KEY` with the Maps Javascript API 
    enabled, and scoped to the production URL and browsers only. This credential will be exposed client-side.
    * `GOOGLE_TRACKING_ID` for Google Analytics tracking
    * `NOTIFY_API_KEY` for GOV.UK Notify
    * `SENTRY_DSN` for Sentry error tracking
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

1. Put a `data.csv` in the /lib folder
2. Run `npm run seed`

## API endpoints

The services API at `/api/services` can be filtered and sorted:

* `category=`... will provide services that match *any* of the supplied categories
* `keywords=`... will provide services that have *any* of the supplied keywords
* `page=` plus an integer greater than one will skip through the results, 10 at a time
* `ages=`, plus either `Young people`, `Young adults` or `Older adults` will filter to services matching *only* the given value
* `lat=` and `lng=` will order results by distance from that point, nearest first, and add an extra field "distance" to the response.

* `accessibility=`... will provide services that match only *all* of the supplied values
* `days=`... will provide services that match *any* of the supplied days
* `evening=true` will restrict results to those happening at evenings and weekends only

To pass arrays of values, include the parameter multiple times, like: `?category=active&category=support`.

## Linting

`eslint` is used to enforce code style. Use a code editor with eslint support, or the `npm test` command, to run a lint.
