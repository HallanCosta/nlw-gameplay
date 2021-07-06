import React from 'react';

import { categories } from '../../utils/categories';

import { 
  Container
} from './styles';

export type Props = {
  isCentred?: boolean;
}

export function ListDivider({ isCentred }: Props) {
  return(
    <Container isCentred={isCentred} />
  );
}