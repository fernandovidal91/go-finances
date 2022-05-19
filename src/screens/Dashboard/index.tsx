import React from "react";

import { HighLightCard } from "../../components/HighLightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

const data: DataListProps[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 10.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '18/05/2022'
  },
  {
    id: '2',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 10.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '18/05/2022'
  },
  {
    id: '3',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 10.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '18/05/2022'
  },
]

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62674890?v=4' }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fernando</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          title="Entradas"
          type="up"
          amount="R$ 17.000,00"
          lastTransaction="13 de Abril"
        />
        <HighLightCard
          title="Saídas"
          type="down"
          amount="R$ 17.000,00"
          lastTransaction="13 de Abril"
        />
        <HighLightCard
          title="Total"
          type="total"
          amount="R$ 17.000,00"
          lastTransaction="13 de Abril"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        >
        </TransactionList>
      </Transactions>
    </Container>
  );
}
