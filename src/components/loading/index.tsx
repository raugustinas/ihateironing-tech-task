import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => (
  <Container>
    <ActivityIndicator size="large" />
  </Container>
);

export default Loading;
