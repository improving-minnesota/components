import React from 'react';
import styled from 'react-emotion';
import T from 'prop-types';

const Container = styled('a')(
  {
    height: 16,
    width: 16,
    fill: 'rgba(255, 255, 255, 0.8)',
    transition: '175ms ease-in-out',
    ':hover': {
      fill: 'rgba(255, 255, 255, 1)'
    }
  },
  ({ size }) =>
    size
      ? {
          height: size,
          width: size
        }
      : {}
);

export function Base({ className, children, href, rel, size, target, ...rest }) {
  return (
    <Container
      className={className}
      href={href}
      target={target}
      rel={rel}
      size={size}
      {...rest}
    >
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
