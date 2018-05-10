import React from "react";
import styled from "react-emotion";
import T from 'prop-types';

import { Logo } from '../logo';
import { FONT_FAMILY } from '../../style';

const Container = styled('header')({
  display: "flex",
  alignItems: 'center',
  boxSizing: 'border-box',
  justifyContent: "space-between",
  fontFamily: "sans-serif",
  backgroundColor: '#d8292f',
  padding: '2.25rem 2rem',
  width: '100%',
  position: 'relative',
  '::after': {
    content: JSON.stringify(''),
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 6,
    backgroundColor: '#1a1a1a'
  }
});

const Title = styled('h1')({
  color: 'white',
  fontFamily: FONT_FAMILY,
  fontSize: 24,
  margin: 0,
  padding: 0,
  textTransform: 'uppercase'
});

export function Header({ title }) {
  return (
    <Container>
      <Logo theme="light" style={{ height: 30 }} />
      {title && <Title>{title}</Title>}
    </Container>
  );
}

Header.propTypes = {
  title: T.string
};
