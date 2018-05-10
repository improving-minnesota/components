import React from 'react';
import styled from 'react-emotion';
import T from 'prop-types';

import { Logo } from '../logo';
import { Github } from '../social';
import { FONT_FAMILY } from '../../style';

const Container = styled('header')({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  fontFamily: 'sans-serif',
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
  fontSize: 20,
  margin: 0,
  padding: 0,
  textTransform: 'uppercase'
});

const Details = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const GithubIcon = styled(Github)({
  marginLeft: '1rem'
});

export function Header({ children, githubLink, title }) {
  return (
    <Container>
      <Logo theme="light" style={{ height: 30 }} />
      <Details>
        {title && <Title>{title}</Title>}
        {githubLink && <GithubIcon href={githubLink} size={20} />}
        {children}
      </Details>
    </Container>
  );
}

Header.propTypes = {
  githubLink: T.string,
  title: T.string
};
