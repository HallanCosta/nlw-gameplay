import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22
  }
})

export const Image = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;