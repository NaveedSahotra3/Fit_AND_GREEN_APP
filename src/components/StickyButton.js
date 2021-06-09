import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '_constants';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
export default function StickyButton({ title = 'test', onPress = () => {} }) {
  const animatedElevation = useSharedValue(0);
  const mountingAnimation = useSharedValue(0);
  useEffect(() => {
    mountingAnimation.value = withSpring(1, {
      stiffness: 60,
    });
    return () => {
      mountingAnimation.value = 0;
    };
  }, [mountingAnimation]);
  const mountingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            mountingAnimation.value,
            [0, 0.9, 1],
            [0.5, 1.06, 1]
          ),
        },
      ],
    };
  });
  const animatedStyleForElevation = useAnimatedStyle(() => {
    return {
      elevation: withSpring(
        interpolate(animatedElevation.value, [0, 1], [10, 40])
      ),
      transform: [
        {
          scale: withSpring(
            interpolate(animatedElevation.value, [0, 1], [1, 1.01])
          ),
        },
      ],
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      animatedElevation.value = 1;
    },
    onActive: () => {},
    onEnd: () => {
      animatedElevation.value = 0;
      runOnJS(onPress)();
    },
  });
  return (
    <TapGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[styles.container, mountingStyle, animatedStyleForElevation]}
      >
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.primary.bg_sat,
    bottom: '2%',
    alignSelf: 'center',
    borderRadius: 25,
    paddingHorizontal: '16%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'GothamBold',
    fontSize: 18,
    color: '#fff',
  },
});
