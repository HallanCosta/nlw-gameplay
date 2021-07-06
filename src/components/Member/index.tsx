import React from 'react';

import { Avatar } from '../Avatar';

import { 
  Container,
  Content,
  Title,
  Status,
  BulletStatus,
  NameStatus
} from './styles';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = { 
  data: MemberProps;
}

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';

  return(
    <Container>
      <Avatar urlImage={data.avatar_url}/>

      <Content>
        <Title>
          { data.username }
        </Title>

        <Status>
          <BulletStatus status={isOnline} />

          <NameStatus>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </NameStatus>
        </Status>
      </Content>
    </Container>
  );
}