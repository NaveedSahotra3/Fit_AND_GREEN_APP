import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chip({
  title = '',
  iconName = '',
  iconType = '',
  iconColor = '#000',
}) {
  const Icon = useRef(null);
  switch (iconType) {
    case 'antDesign':
      Icon.current = require('react-native-vector-icons/AntDesign').default;
      break;
    case 'materialIcon':
      Icon.current = require('react-native-vector-icons/MaterialIcons').default;
      break;
    case 'materialCommunityIcon':
      Icon.current = require('react-native-vector-icons/MaterialCommunityIcons').default;
      break;
  }
  return (
    <View style={styles.container}>
      <Icon.current name={iconName} size={24} color={iconColor} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 13,
    color: '#302f3c',
    fontFamily: 'GothamBold',
    marginLeft: 10,
  },
});
