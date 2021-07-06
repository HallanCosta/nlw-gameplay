import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Backgroud';

import { useAuth } from '../../hooks/auth';

import { theme } from '../../global/styles/theme';
import { 
  Container,
  Illustration,
  Content,
  Title,
  Subtitle
} from './styles';

export function Signin() {
  const { loading, signIn } = useAuth();
  
  async function handleSignIn() {
    try {
      await signIn(); 
    } catch(err) {
      Alert.alert(err);
    }
  }

  return (
    <Background>
      <Container>      
        <Illustration 
          source={IllustrationImg} 
          resizeMode="stretch"
        />

        <Content>
          <Title>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Title>

          <Subtitle>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Subtitle>

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> : 
            <ButtonIcon 
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          }
        </Content>
      </Container>
    </Background>
  );
}