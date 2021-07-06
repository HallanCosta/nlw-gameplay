import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${theme.fonts.title700};

  font-size: 20px;
  color: ${theme.colors.heading};
`;

export const Action = styled.View``;