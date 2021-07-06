import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  matches: {
    marginTop: 24,
    marginLeft: 24
  }
});

export const Header = styled.View`
  width: 100%;
  padding: 0 24px 0;
  flex-direction: row;

  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
`;