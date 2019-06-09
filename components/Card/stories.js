import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index'

storiesOf('Button', module)
  .add('with text', () => (
    <Card/>
  ))