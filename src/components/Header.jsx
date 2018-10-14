import React from 'react';

// Import Styled Components
import { Logo, Masthead, Title } from './Header.atoms';

export default () => (
  <Masthead>
    <Logo src="assets/winter/main.svg" alt="Snowman Icon" />
    <Title>
      {'Killed by Google'}
    </Title>
  </Masthead>
);
