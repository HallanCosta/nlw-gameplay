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

export const Title = styled.Text`
  flex: 1px;
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  font-family: ${theme.fonts.text500};
`;