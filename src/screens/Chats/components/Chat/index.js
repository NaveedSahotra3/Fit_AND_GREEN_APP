/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chat({ thisSide, message }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: thisSide ? 'rgb(60,155,70)' : '#707372',
          alignSelf: thisSide ? 'flex-end' : 'flex-start',
        },
        thisSide
          ? { borderBottomRightRadius: 0 }
          : { borderBottomLeftRadius: 0 },
      ]}
    >
      <Text style={[styles.messageText]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 24,
  },
  messageText: {
    fontFamily: 'GothamLight',
    color: '#eee',
  },
});
