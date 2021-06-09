/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '_constants';
import Location from './Location';
import AnimationQueue from './AnimationQueue';
export default function Header({
  forceDrawer = false,
  LeftComponent = false,
  RightComponent = false,
  MidComponent = false,
}) {
  const navigation = useNavigation();
  const [canGoBack] = useState(() => navigation.canGoBack());

  return (
    <Appbar style={styles.Appbar}>
      <AnimationQueue>
        {LeftComponent != false ? (
          LeftComponent
        ) : canGoBack && !forceDrawer ? (
          <Appbar.Action
            icon="arrow-left"
            color={'#F5F5DC'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ) : (
          <Appbar.Action
            icon="menu"
            color={'#F5F5DC'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        )}
        {MidComponent != false ? MidComponent : <Location />}
        {RightComponent != false ? (
          RightComponent
        ) : (
          <Appbar.Action
            icon="translate"
            color={'#F5F5DC'}
            onPress={() => {}}
          />
        )}
      </AnimationQueue>
    </Appbar>
  );
}

const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: Colors.primary.bg_sat,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
