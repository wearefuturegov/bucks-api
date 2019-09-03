import React from "react"
import { storiesOf } from "@storybook/react"
import MobileMenu from "./index"

storiesOf("Mobile menu", module)
    .addParameters({
        backgrounds: [
            { name: "dark", value: "#1E2428", default: true },
        ],
    })
    .add("default", () => (
        <MobileMenu
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
    ), {
        notes: "The mobile menu component. Make the screen smaller to see it",
    })

