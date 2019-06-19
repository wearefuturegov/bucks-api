import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckboxBubble from './index'

storiesOf('Checkbox bubble', module)
  .add('unchecked', () => (
    <CheckboxBubble
        name="test"
        value="test"
        label="Cultural"
        selectionState={[]}
        />
  ))
  .add('checked', () => (
    <CheckboxBubble
        name="test"
        value="test"
        label="Cultural"
        selectionState={["test"]}
        />
  ))