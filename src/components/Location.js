import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function Location() {
  return (
    <View style={styles.container}>
      <EvilIcons name={'location'} size={24} color={'#F5F5DC'} />
      <Text style={styles.text}>Dhaka,BD</Text>
      <EvilIcons name={'chevron-down'} size={24} color={'#F5F5DC'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#F5F5DC',
  },
});
