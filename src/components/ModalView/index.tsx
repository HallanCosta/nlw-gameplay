import React, { ReactNode } from 'react';
import { 
  Modal, 
  ModalProps, 
  TouchableWithoutFeedback 
} from 'react-native';

import { Background } from '../Backgroud';

import { 
  Container,
  Overlay,
  Bar
} from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({
  closeModal,
  children,
  ...rest
}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <TouchableWithoutFeedback
        onPress={closeModal}
      >
        <Overlay>
          <Container>
            <Background>
              <Bar />

              {children}
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

