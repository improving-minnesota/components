import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from '../../src/components/footer';

storiesOf('Footer', module)
  .add('with default styling', () => (
    <Footer />
  ));
