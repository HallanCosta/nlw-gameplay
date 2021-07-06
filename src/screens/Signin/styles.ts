import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background: ${theme.colors.secondary100}; */
`;

export const Illustration = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size:  40px;
  margin-bottom: 16px;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;