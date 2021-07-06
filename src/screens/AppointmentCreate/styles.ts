import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  
});

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const Container = styled.ScrollView`
  
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading}
`;

export const Form = styled.View`
  padding: 32px 24px 32px;
  margin-top: 32px;
`;

export const Select = styled.View`
  flex-direction: row;
  width: 100%;
  height: 68px;

  border: 1px solid ${theme.colors.secondary50};
  border-radius: 8px;
  align-items: center;

  padding-right: 25px;
  overflow: hidden;
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;
  background: ${theme.colors.secondary40};

  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.secondary50};
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 30px;
`;

export const FieldContent = styled.View``;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;

export const CaracteresLimit = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
`;

export const Footer = styled.View`
  margin: 20px 0 56px;
`;