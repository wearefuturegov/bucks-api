import React from "react"
import { storiesOf } from "@storybook/react"
import FullWidthSearchPanel from "./index"

storiesOf("Full width search panel", module)
    .add("default", () => (
        <FullWidthSearchPanel
            popularPages={[
                {
                    title: "Getting equipment",
                    href: "#"
                },
                {
                    title: "Keeping yourself safe",
                    href: "#"
                },
                {
                    title: "Getting help at home",
                    href: "#"
                },
            ]}
        />
    ))