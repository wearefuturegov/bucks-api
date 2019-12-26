# Buckinghamshire community assets API

A data back-end for the Buckinghamshire community assets catalogue, driven by a mongodb database. It has:

- database models for storing community assets
- routes for a RESTful API of community services at `/api/services`
- config to edit the catalogue in Forest Admin.
- helper API routes for certain functionality on the front-end that needs a server

It is front-end agnostic, but is intended to work with the `bucks-service-directory` repo.

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
    * `NOTIFY_API_KEY` for GOV.UK Notify
    * `SENTRY_DSN` for Sentry error tracking
3. `npm install`
4. `npm run dev`
5. Optionally, [seed the database](#database-seeds)

The app will be available on port 3000. Remember, there's no front-end, so you'll have to go to `/api/services` to see anything.

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

* `radius=` overrides paging parameters and shows all results within the specified radius (in meters)

* `accessibility=`... will provide services that match only *all* of the supplied values
* `days=`... will provide services that match *any* of the supplied days
* `evening=true` will restrict results to those happening at evenings and weekends only

To pass arrays of values, include the parameter multiple times, like: `?category=active&category=support`.
