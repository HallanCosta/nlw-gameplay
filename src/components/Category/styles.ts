import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

import { Props } from '.';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  }
});

export const Content = styled.View<Pick<Props, 'checked'>>`
  opacity: ${({ checked }) => checked ? 1 : 0.4};
  width: 100px;
  height: 116px;

  border-radius: 8px;
  align-items: center;
  padding: 7px 0 7px;
`;

export const Check = styled.View<Pick<Props, 'checked'>>`
  width: ${({ checked }) => checked ? '10px' : '12px'};
  height: ${({ checked }) => checked ? '10px' : '12px'};
  background: ${({ checked }) => checked ? theme.colors.primary : theme.colors.secondary100};

  border: ${({ checked }) => checked ? '0px' : '2px'} solid ${theme.colors.secondary50};
  border-radius: 3px;
  position: absolute;

  top: 7px;
  right: 7px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 15px;
  margin-top: 15px;
`;
