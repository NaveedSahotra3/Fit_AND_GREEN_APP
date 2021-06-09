import React, { useRef } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native';
import { Header } from '_components';
import { Colors } from '_constants';
import { Conversation } from './components';
export default function Messages({ navigation }) {
  const conversation = useRef([
    {
      _id: '1',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 1,
    },
    {
      _id: '2',
      userName: 'Abhishek Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 21,
    },
    {
      _id: '3',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 12,
    },
    {
      _id: '4',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 5,
    },
    {
      _id: '5',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 7,
    },
    {
      _id: '6',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 0,
    },
    {
      _id: '7',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 9,
    },
    {
      _id: '8',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 9,
    },
    {
      _id: '9',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 0,
    },
    {
      _id: '10',
      userName: 'Ayush Tripathi',
      lastMessage: 'what are you doing?',
      messageTime: '5:12 PM',
      unreadMessageCount: 0,
    },
  ]).current;
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <Header
          forceDrawer={true}
          RightComponent={null}
          MidComponent={
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Messages</Text>
            </View>
          }
        />
        <View style={styles.MessageConversationContainer}>
          <FlatList
            data={conversation}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              const { _id, ...rest } = item;
              return (
                <Conversation
                  index={index}
                  {...rest}
                  onPress={() => {
                    navigation.navigate('Chats', { item: rest });
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '25%',
  },
  headerTitle: {
    fontFamily: 'GothamBold',
    fontSize: 16,
    color: '#eee',
  },
  MessageConversationContainer: {
    flex: 1,
    // paddingHorizontal: '4%',
    // paddingVertical: '10%',
  },
});
