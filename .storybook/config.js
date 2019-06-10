import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { addParameters } from '@storybook/react'

addDecorator(withA11y)
 
addParameters({
  backgrounds: [
    { name: 'light', value: '#F1F4F3', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'dark', value: '#1E2428' },
  ],
})

function loadStories() {
  const req = require.context('../components', true, /stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

import '../components/Layout/style.scss'

configure(loadStories, module)