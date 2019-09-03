import React from "react"
import { storiesOf } from "@storybook/react"
import Header from "./index"

storiesOf("Site header", module)
    .add("default", () => (
        <Header
            menuItems={[
                {
                    href: "#",
                    text: "Information and advice"
                },
                {
                    href: "#",
                    text: "Explore your needs"
                },
                {
                    href: "#",
                    text: "Log in"
                },
                {
                    href: "#",
                    text: "Sign up"
                },
            ]}
        />
    ))
    .add("inverted", () => (
        <Header
            inverted
            menuItems={[
                {
                    href: "#",
                    text: "Information and advice"
                },
                {
                    href: "#",
                    text: "Explore your needs"
                },
                {
                    href: "#",
                    text: "Log in"
                },
                {
                    href: "#",
                    text: "Sign up"
                },
            ]}
        />
    ))