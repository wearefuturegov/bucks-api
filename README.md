# Buckinghamshire adult social care

An app for the Buckinghamshire adult social care project. 

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
3. `npm install`
4. `npm run dev`

The app will be available on port 3000.

## Style guide

[![Netlify Status](https://api.netlify.com/api/v1/badges/e0800365-0ae7-46de-8f36-88ce085da6f4/deploy-status)](https://app.netlify.com/sites/bucks-care-style-guide/deploys)

The app has a living style guide of React components built with Storybook.

To spin it up in dev mode, run `npm run storybook`.

Pushes to master are built to [this static HTML site](http://bucks-care-style-guide.netlify.com/).