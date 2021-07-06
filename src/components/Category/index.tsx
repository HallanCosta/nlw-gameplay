import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

import { 
  styles, 
  Content,
  Check,
  Title
} from './styles';

export type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {

  const { 
    secondary40, 
    secondary50, 
    secondary70, 
    secondary85 
  } = theme.colors;

  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <LinearGradient
        style={styles.container}
        colors={[ secondary50, secondary70 ]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[ checked ? secondary85 : secondary50, secondary40 ]}
        > 
          {
            hasCheckBox &&
            <Check checked={checked} />
          }

          <Icon
            width={48}
            height={48}
          />

          <Title>
            {title}
          </Title>
          
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}