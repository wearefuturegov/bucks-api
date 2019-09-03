import React from "react"
import { storiesOf } from "@storybook/react"
import PhaseBanner from "./index"

storiesOf("Beta phase banner", module)
    .add("default", () => (
        <PhaseBanner/>
    ))