import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  interpolate,
  Easing,
  runOnUI,
} from 'react-native-reanimated';

export default function FluidAnimation({
  children,
  delay = 200,
  ty = -25,
  tx = -25,
  scale = 1,
  opacity = 0,
}) {
  const mountingAnimation = useSharedValue(0);

  useEffect(() => {
    const init = () => {
      mountingAnimation.value = 1;
    };
    runOnUI(init)();
  }, [mountingAnimation]);
  const mountingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            delay,
            withTiming(interpolate(mountingAnimation.value, [0, 1], [ty, 0]), {
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            })
          ),
        },
        {
          translateX: withDelay(
            delay,
            withTiming(interpolate(mountingAnimation.value, [0, 1], [tx, 0]), {
              duration: 400,
              easing: Easing.inOut(Easing.ease),
            })
          ),
        },
        {
          scale: withDelay(
            delay,
            withTiming(
              interpolate(mountingAnimation.value, [0, 1], [scale, 1]),
              {
                duration: 400,
                easing: Easing.inOut(Easing.ease),
              }
            )
          ),
        },
      ],
      opacity: withDelay(
        delay,
        withTiming(interpolate(mountingAnimation.value, [0, 1], [opacity, 1]), {
          duration: 500,
          easing: Easing.inOut(Easing.ease),
        })
      ),
    };
  }, [delay, ty, tx, opacity, scale]);

  return <Animated.View style={mountingStyle}>{children}</Animated.View>;
}
