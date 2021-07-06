import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

import { Props } from './';

export const Container = styled.View<Props>`
  width: 78%;
  height: 1px;
  background: ${theme.colors.secondary40};
  margin-top: ${({ isCentred }) => isCentred ? '12px' : '2px' };
  margin-bottom: ${({ isCentred }) => isCentred ? '12px' : '31px' };;
  align-self: flex-end;
`;