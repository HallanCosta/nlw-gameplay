import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24
  }
});

export const FlatList = styled.FlatList``;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 20px;
`;

export const Alignment = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;

  margin-bottom: 4px;
`;

export const Type = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;
