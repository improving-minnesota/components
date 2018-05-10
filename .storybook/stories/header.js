import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from '../../src/components/header';

storiesOf('Header', module)
  .add('with default styling', () => (
    <Header />
  ))
  .add('with title', () => (
    <Header title="React training" />
  ));
