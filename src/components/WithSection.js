/* eslint-disable no-sparse-arrays */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WithSection({
  children,
  title = '',
  titleSize = 18,
  style = {},
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, , { fontSize: titleSize }]}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'GothamBold',
    color: '#302f3c',
  },
});
