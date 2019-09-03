import React from "react"
import { storiesOf } from "@storybook/react"
import WideCallToActionPanel from "./index"

storiesOf("Wide call-to-action panel", module)
    .add("default", () => (
        <WideCallToActionPanel
            title="In an emergency"
            description="If you need to speak to someone urgently about a vulnerable adult, call us."
            linkText="Get emergency help"
            href="#"
        />
    ))
    .add("no description", () => (
        <WideCallToActionPanel
            title="If you need to speak to someone urgently"
            linkText="Get emergency help"
            href="#"
        />
    ))