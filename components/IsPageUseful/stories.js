import React from "react"
import { storiesOf } from "@storybook/react"
import UsefulPage from "./index"

storiesOf("Is this page useful?", module)
    .add("default", () => (
        <UsefulPage/>
    ))