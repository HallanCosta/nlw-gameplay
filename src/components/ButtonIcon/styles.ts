import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,

    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;

  border-color: ${theme.colors.line};
`;

export const Discord = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1px;
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  font-family: ${theme.fonts.text500};
`;