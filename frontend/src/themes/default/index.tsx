import React, { FC } from 'react';
import { Container } from './style';

interface DefaultProps {
  children: React.ReactNode;
}

export const Default: FC<DefaultProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)