import React from 'react'
import { storiesOf } from '@storybook/react'
import InterestsFilter from './InterestsFilter'
import LocationFilter from './LocationFilter'

storiesOf('Filters', module)
    .add('interests', () => (
        <InterestsFilter query={{
            category: ["support", "social"]
        }}/>
    ))
    .add('location', () => (
        <LocationFilter query={{
            location: "Initial user-supplied location goes here"
        }}/>
    ))

