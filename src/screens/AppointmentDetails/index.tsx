import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';


import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';

import BannerImg from '../../assets/banner.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails(){
  const members = [
    {
      id: '1',
      username: 'Luan Faria',
      avatar_url: 'https://github.com/luuanfaria.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Luan',
      avatar_url: 'https://github.com/luuanfaria.png',
      status: 'offline'
    }
  ]

  return(
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }      
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}> 
        <ButtonIcon 
          title="Entrar na partida"
        />
      </View>
    </Background>
  );
}