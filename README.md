# components

React components for getting up and started with OPi-branded React applications.

## Install

```bash
yarn add @objectpartners/components
```

with peer-dependencies

```bash
yarn add @objectpartners/components react@^16.0.0 react-dom@^16.0.0 emotion react-emotion
```

## Usage

```jsx
import React from 'react';
import styled from 'react-emotion';

import { Header, Footer } from '@objectpartners/components';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

export default function App() {
  return (
    <Container>
      <Header />
      <p>This is some content</p>
      <Footer />
    </Container>
  );
}
```
