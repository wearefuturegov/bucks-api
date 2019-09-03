import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./index"

storiesOf("Button", module)
    .add("default", () => (
        <Button href="#">Get started</Button>
    ))
    .add("inverted", () => (
        <Button href="#" background="white">Get started</Button>
    ))