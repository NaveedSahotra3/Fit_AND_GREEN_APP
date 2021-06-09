import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
export default function FoodThumbnailCard({ onPress = () => {}, index }) {
  const animation = useSharedValue(0);
  const animatedWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(interpolate(animation.value, [0, 1], [1, 0.998])),
        },
      ],
    };
  });
  const handler = useAnimatedGestureHandler({
    onStart: () => {
      animation.value = 1;
    },
    onEnd: () => {
      animation.value = 0;
      runOnJS(onPress)();
    },
  });

  return (
    <TapGestureHandler onGestureEvent={handler}>
      <Animated.View
        style={[styles.FoodThumbnailCardWrapper, animatedWrapperStyle]}
      >
        <Card elevation={2} style={styles.container}>
          <Card.Cover
            style={styles.cover}
            source={require('../../../assets/images/burger.jpg')}
          />
          <Card.Content style={styles.content}>
            <View>
              <Text style={styles.title}>Chillox Burger</Text>
              <View style={styles.subTitleWrapper}>
                <Text style={styles.subTitle}>Burgers</Text>
                <View style={styles.dot} />
                <Text style={styles.subTitle}>Fast food</Text>
              </View>
            </View>
            <View>
              <View style={styles.starAndTime}>
                <Icon name="star" size={16} color={'#FF6838'} />
                <Text style={styles.ratingText}>4.8</Text>
              </View>
              <Text style={styles.durationText}>10min</Text>
            </View>
          </Card.Content>
        </Card>
      </Animated.View>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({
  FoodThumbnailCardWrapper: {
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  },
  container: { borderRadius: 16, overflow: 'hidden' },
  cover: { resizeMode: 'stretch' },
  content: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingTop: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#302F3C',
    fontSize: 16,
    fontFamily: 'GothamBold',
  },
  subTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTitle: {
    color: '#999',
    alignItems: 'center',
    fontFamily: 'GothamBold',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: '#999',
    marginHorizontal: 4,
    marginTop: 2,
  },
  starAndTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingText: {
    color: '#999',
    fontFamily: 'GothamBold',
  },
  durationText: {
    alignSelf: 'flex-end',
    color: '#999',
    fontFamily: 'GothamBold',
  },
});
