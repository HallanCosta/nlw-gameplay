import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { 
  styles,
  Container
} from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="default"
      {...rest }
    />
  );
}