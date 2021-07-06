import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { 
  styles,
  Title
} from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function Button({ 
  title, 
  ...rest
}: Props) {
  return(
    
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </RectButton>
  );
}