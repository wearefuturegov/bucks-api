import React from "react"
import { storiesOf } from "@storybook/react"
import OptionBubble from "./index"

storiesOf("Checkbox bubble", module)
    .add("unchecked", () => (
        <OptionBubble
            name="test"
            value="test"
            label="Cultural"
            selectionState={[]}
        />
    ))
    .add("checked", () => (
        <OptionBubble
            name="test"
            value="test"
            label="Cultural"
            selectionState={["test"]}
        />
    ))