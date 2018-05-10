import React from 'react';
import styled from 'react-emotion';
import T from 'prop-types';

const Container = styled('a')({
  height: 16,
  width: 16,
  margin: 12,
  marginBottom: 0,
  fill: 'rgba(255, 255, 255, 0.8)',
  transition: '175ms ease-in-out',
  ':hover': {
    fill: 'rgba(255, 255, 255, 1)'
  }
});

export function Base({ className, children, href, rel, target }) {
  return (
    <Container className={className} href={href} target={target} rel={rel}>
      {children}
    </Container>
  );
}

Base.defaultProps = {
  rel: 'noopener',
  target: '_blank'
};

Base.propTypes = {
  className: T.string,
  children: T.node.isRequired,
  href: T.string.isRequired,
  rel: T.string,
  target: T.string
};
