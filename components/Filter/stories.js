import React from "react"
import { storiesOf } from "@storybook/react"
import CategoryFilter from "./CategoryFilter"
import LocationFilter from "./LocationFilter"

storiesOf("Filters", module)
    .add("interests", () => (
        <CategoryFilter query={{
            category: ["support", "social"]
        }}/>
    ))
    .add("location", () => (
        <LocationFilter query={{
            location: "Initial user-supplied location goes here"
        }}/>
    ))

