import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { Header, AnimationQueue } from '_components';
import {
  Avatar,
  Divider,
  TouchableRipple,
  TextInput,
  IconButton,
} from 'react-native-paper';
import { Colors } from '_constants';
import { useSelector } from 'react-redux';
export default function Settings() {
  const [edit, enableEdit] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
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
          MidComponent={
            <View style={styles.MidComponent}>
              <Text style={styles.midComponentText}>Settings</Text>
            </View>
          }
          RightComponent={
            <IconButton
              color={'#fff'}
              onPress={() => {
                enableEdit((p) => !p);
              }}
              icon={'pencil'}
            />
          }
        />
        <ScrollView>
          <View style={styles.contentContainer}>
            <AnimationQueue>
              <TouchableRipple
                onPress={() => {}}
                style={styles.avatarTouchable}
              >
                <Avatar.Image
                  source={require('../../assets/images/person.jpg')}
                  size={120}
                />
              </TouchableRipple>
              <Divider style={styles.divider} />
              <TextInput
                editable={edit}
                label={'First Name'}
                value={user.name ? user.name : '--'}
              />
              <TextInput
                editable={edit}
                label={'Last Name'}
                value={user.lastName ? user.lastName : ''}
              />
              <TextInput
                editable={edit}
                label={'Phone Number'}
                value={user.mobile ? user.mobile : '--'}
              />
              <TextInput
                editable={edit}
                label={'Email'}
                value={user.email ? user.email : '--'}
              />
              <TextInput
                underlineColor={'#008b83'}
                editable={edit}
                keyboardType={'default'}
                textContentType={'password'}
                label={'Password'}
                value={'******'}
              />
            </AnimationQueue>
          </View>
          <View style={styles.pushNotificationStatus}>
            <Text>Enable Push Notification</Text>
            <Switch />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MidComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {
        translateX: -18,
      },
    ],
  },
  midComponentText: {
    color: '#eee',
    fontFamily: 'GothamMedium',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '4%',
  },
  avatarTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '4%',
  },
  divider: {
    height: 1,
  },
  pushNotificationStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '4%',
  },
});
