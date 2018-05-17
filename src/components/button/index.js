import React from 'react';
import styled from 'react-emotion';

import { BUTTON_PRIMARY_COLOR, BUTTON_SECONDARY_COLOR } from '../../style';

export const Button = styled('button')({
  backgroundColor: BUTTON_SECONDARY_COLOR,
  border: '2px solid transparent',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 16,
  padding: '0.5rem',
  transition: '175ms ease-in-out',
  outline: 'none',
  ':hover': {
    backgroundColor: 'transparent',
    borderColor: BUTTON_SECONDARY_COLOR,
    color: BUTTON_SECONDARY_COLOR
  },
  ':active': {
    backgroundColor: BUTTON_SECONDARY_COLOR,
    color: 'white'
  }
}, ({ primary }) => ({
  ...(primary ? {
    backgroundColor: BUTTON_PRIMARY_COLOR,
    ':hover': {
      borderColor: BUTTON_PRIMARY_COLOR,
      color: BUTTON_PRIMARY_COLOR
    },
    ':active': {
      backgroundColor: BUTTON_PRIMARY_COLOR,
      color: 'white'
    }
  } : {})
}));
