import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'react-emotion';

import { Logo } from '../../src/components/logo';

const Container = styled('div')({
  padding: '2rem'
}, ({ theme }) => (theme === 'light' ? {
  backgroundColor: '#444',
} : {}));

storiesOf('Logo', module)
  .add('default', () => (
    <Container theme="light"><Logo /></Container>
  ))
  .add('default with red text', () => (
    <Container><Logo textColor="#E02926" /></Container>
  ))
  .add('with light theme', () => (
    <Container theme="light"><Logo theme="light"/></Container>
  ))
  .add('with dark theme', () => (
    <Container><Logo theme="dark" /></Container>
  ));
