import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'react-emotion';

import { Header } from '../../src/components/header';
import { Twitter } from '../../src/components/social/twitter';

const TwitterIcon = styled(Twitter)({
  marginLeft: '1rem'
});

storiesOf('Header', module)
  .add('with default styling', () => (
    <Header logoHref="/" />
  ))
  .add('with title', () => (
    <Header logoHref="/" title="React training" />
  ))
  .add('with Github link', () => (
    <Header logoHref="/" githubLink="https://github.com/objectpartners/components" />
  ))
  .add('with title and Github link', () => (
    <Header logoHref="/" title="React training" githubLink="https://github.com/objectpartners/components" />
  ))
  .add('with children', () => (
    <Header>
      <TwitterIcon size={20} />
    </Header>
  ));
