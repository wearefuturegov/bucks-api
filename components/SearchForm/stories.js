import React from "react"
import { storiesOf } from "@storybook/react"
import SearchForm from "./index"

storiesOf("Search form", module)
    .add("default", () => (
        <SearchForm/>
    ))