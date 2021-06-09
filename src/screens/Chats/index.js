/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native';
import { Avatar, IconButton, TouchableRipple } from 'react-native-paper';
import { Header } from '_components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Chat, ChatInput } from './components';
import { Colors } from '_constants';
export default function Chats({ navigation }) {
  const chats = useRef([
    {
      _id: '1',
      message:
        'hello this is a long message i wanted to forward you i hope you like it',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '2',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '3',
      message:
        'i am not gonna lie but this is the best chat application i have ever used',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '4',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '5',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '6',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '7',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '8',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '9',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '10',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '11',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '12',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '13',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '14',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '15',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '16',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '17',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '18',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '19',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '20',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '21',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '22',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '23',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
    {
      _id: '24',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '25',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: true,
    },
    {
      _id: '26',
      message: 'hello',
      timestamp: '3:12 PM',
      thisSide: false,
    },
  ]).current;
  const [textMessage, setTextMessage] = useState('');
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <Header
          LeftComponent={
            <TouchableRipple
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={styles.leftComponentContainer}>
                <Icon name="arrow-left" color={'#ccc'} size={22} />
                <Avatar.Image
                  size={34}
                  style={{ marginLeft: '2%' }}
                  source={require('../../assets/images/person.jpg')}
                />
              </View>
            </TouchableRipple>
          }
          MidComponent={
            <TouchableRipple
              style={{
                paddingVertical: 8,
              }}
              onPress={() => {}}
            >
              <View style={styles.midCompContainer}>
                <Text style={styles.nameText}>Ayush Tripathi</Text>
                <Text style={styles.lastSeenText}>
                  last seen today at 7:12 PM
                </Text>
              </View>
            </TouchableRipple>
          }
          RightComponent={
            <View style={styles.rightComponentContainer}>
              <IconButton
                icon={'video'}
                size={24}
                color={'#ddd'}
                onPress={() => {}}
              />
              <IconButton
                icon={'phone'}
                size={24}
                color={'#ddd'}
                onPress={() => {}}
              />
              <IconButton
                icon={'dots-vertical'}
                size={24}
                color={'#ddd'}
                onPress={() => {}}
              />
            </View>
          }
        />
        <FlatList
          data={chats}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={SeparatorComponent}
          style={styles.chatlistStyle}
          contentContainerStyle={styles.chatlistContentStyle}
          renderItem={({ item, index }) => {
            const { thisSide } = item;
            return <Chat message={item.message} thisSide={thisSide} />;
          }}
        />
        <View style={{ paddingVertical: 5 }}>
          <ChatInput
            textMessage={textMessage}
            setTextMessage={setTextMessage}
          />
        </View>
      </View>
    </>
  );
}
const SeparatorComponent = () => {
  return <View style={{ paddingVertical: 3 }} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  leftComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  midCompContainer: {
    paddingHorizontal: 4,
  },
  nameText: {
    fontFamily: 'GothamMedium',
    color: '#eee',
    fontSize: 14,
  },
  lastSeenText: {
    fontFamily: 'GothamLight',
    fontSize: 11,
    color: '#eee',
    lineHeight: 15,
  },
  chatlistStyle: {
    // marginBottom: 20,
  },
  chatlistContentStyle: {
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
});
