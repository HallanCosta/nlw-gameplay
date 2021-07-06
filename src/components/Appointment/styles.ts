import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { GuildProps } from '../Guild';

import { theme } from '../../global/styles/theme';
const { primary, on } = theme.colors;

export const styles = StyleSheet.create({
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
});

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;

  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  font-size: 13px;

  margin-left: 7px;
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text<Pick<GuildProps, 'owner'>>`
  color: ${({ owner }) => owner ? primary : on};
  font-family: ${theme.fonts.text500};
  font-size: 13px;

  margin-left: 7;
  margin-right: 24px;
`;