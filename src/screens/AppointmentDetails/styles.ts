import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'; 

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  members: {
    marginLeft: 24,
    marginTop: 27
  },
  banner: {
    width: '100%',
    height: 234,
    justifyContent: 'flex-end'
  }
});

export const ImageBackground = styled.ImageBackground``;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px 0;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  line-height: 21px;
`;

export const Footer = styled.View`
  padding: 20px 24px 20px;
  margin-bottom: ${getBottomSpace()};
`;