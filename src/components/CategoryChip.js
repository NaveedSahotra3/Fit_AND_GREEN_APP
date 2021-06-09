/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Colors } from '_constants';
export default function CategoryChip({
  active = false,
  title = 'burger',
  onPress = () => {},
}) {
  return (
    <Pressable onPress={() => onPress(title)}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: active ? Colors.primary.bg_sat : '#f4f4f4',
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.text,
            {
              color: active ? '#fff' : '#000',
            },
          ]}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 20, //problem with adjusting margin with %
  },
  text: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: 'GothamBold',
  },
});
