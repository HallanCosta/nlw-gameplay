import React from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';

import { 
  Container,
  UserContent,
  User,
  Greeting,
  Username,
  Message
} from './styles';

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ]
    );
  }

  return (
    <Container>

      <RectButton
        onPress={handleSignOut}
      >
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <UserContent>
        <User>
          <Greeting>
            Olá,
          </Greeting>

          <Username>
            {user.firstName}
          </Username>
        </User>

        <Message>
          Hoje é dia de vitória
        </Message>

      </UserContent>
    </Container>
  );
}

