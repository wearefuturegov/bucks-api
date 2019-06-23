import React from "react"
import { storiesOf } from "@storybook/react"
import CentredText from "./index"

storiesOf("Centred title and text", module)
    .add("default", () => (
        <CentredText />
    ))