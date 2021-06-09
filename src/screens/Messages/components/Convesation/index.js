/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, TouchableRipple, Badge, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '_constants';
import { FluidAnimation } from '_components';
export default function Conversation({
  userName = 'Ayush Tripathi',
  lastMessage = 'where have you been?',
  messageTime = '5:12 PM',
  unreadMessageCount = 3,
  onPress = () => {},
  index = 1,
}) {
  return (
    <TouchableRipple onPress={onPress}>
      <FluidAnimation delay={index * 50}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={48}
              source={require('../../../../assets/images/person.jpg')}
            />
          </View>
          <View style={styles.titleAndMessageWrapper}>
            <View style={styles.titleAndMessageContainer}>
              <View style={styles.nameAndTime}>
                <Text style={styles.nameText}>{userName}</Text>
                <Text style={styles.timeText}>{messageTime}</Text>
              </View>
              <View style={styles.messageAndBadge}>
                <View style={styles.messageAndIcon}>
                  <Icon name={'checkmark'} color={'#666'} size={15} />
                  <Text style={styles.messageText}>{lastMessage}</Text>
                </View>
                {unreadMessageCount > 0 ? (
                  <Badge style={{ backgroundColor: Colors.primary.bg_dark }}>
                    {unreadMessageCount}
                  </Badge>
                ) : null}
              </View>
            </View>
            <Divider
              style={{
                height: 1,
              }}
            />
          </View>
        </View>
      </FluidAnimation>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  avatarContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
    // backgroundColor: 'red',
  },
  titleAndMessageWrapper: {
    flex: 5,
    paddingRight: 10,
  },
  titleAndMessageContainer: {
    flex: 1,
    paddingVertical: 4,
  },
  nameAndTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: 'GothamMedium',
    fontSize: 15,
    color: '#302f3c',
  },
  timeText: {
    fontFamily: 'GothamLight',
    fontSize: 11,
    color: '#666',
  },
  messageAndBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  messageAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontFamily: 'GothamLight',
    fontSize: 13,
    color: '#666',
    marginLeft: 2,
  },
});
