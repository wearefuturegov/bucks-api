import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './index'

storiesOf('Hero', module)
  .add('default', () => (
    <Hero
      title="Support and care for adults, their families and carers"
      description="Helping you find the right information and support in Buckinghamshire."
      />
  ))