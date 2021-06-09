import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '_navigation';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

const { store, persistor } = Store();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

// import React, {useEffect} from 'react';
// import {StyleSheet, View} from 'react-native';
// import {
//   PanGestureHandler,
//   TapGestureHandler,
// } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedGestureHandler,
//   // useAnimatedScrollHandler,
//   useAnimatedStyle,
//   useDerivedValue,
//   useSharedValue,
//   withSpring,
//   withDecay,
// } from 'react-native-reanimated';
// import SplashScreen from 'react-native-splash-screen';

// export default function App() {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   const offset = useSharedValue(0);
//   const pressed = useSharedValue(false);
//   const startingPosition = 100;
//   const x = useSharedValue(startingPosition);
//   const y = useSharedValue(startingPosition);
//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: offset.value * 255,
//         },
//       ],
//     };
//   });
//   // function updateSharedValue() {
//   //   'worklet';
//   //   scrollOffset.value += Math.random();
//   // }
//   // const scrollHandler = useAnimatedScrollHandler({
//   //   onScroll: event => {
//   //     scrollOffset.value = event.contentOffset.y;
//   //   },
//   // });
//   const derived = useDerivedValue(() => {
//     return x.value + 10;
//   });
//   const uas = useAnimatedStyle(() => {
//     return {
//       backgroundColor: pressed.value ? '#FEEF86' : '#001972',
//       transform: [{translateX: withSpring(derived.value)}],
//     };
//   });
//   const eventHandler = useAnimatedGestureHandler({
//     onStart: (event, ctx) => {
//       pressed.value = true;
//     },
//     onEnd: (event, ctx) => {
//       pressed.value = false;
//     },
//   });
//   const eventHandler1 = useAnimatedGestureHandler({
//     onStart: (event, ctx) => {
//       pressed.value = true;
//       ctx.startX = x.value;
//       ctx.startY = y.value;
//     },
//     onActive: (event, ctx) => {
//       x.value = ctx.startX + event.translationX;
//       y.value = ctx.startY + event.translationY;
//     },
//     onEnd: (event, ctx) => {
//       pressed.value = false;
//       // x.value = withSpring(x.value);
//       // y.value = withSpring(y.value);
//     },
//   });
//   const uas1 = useAnimatedStyle(() => {
//     return {
//       backgroundColor: pressed.value ? '#FEEF86' : '#001972',
//       transform: [{translateX: x.value}, {translateY: y.value}],
//     };
//   });

//   const X = useSharedValue(0);

//   const gestureHandler = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       ctx.startX = X.value;
//     },
//     onActive: (event, ctx) => {
//       X.value = ctx.startX + event.translationX;
//     },
//     onEnd: (evt) => {
//       X.value = withDecay({
//         velocity: evt.velocityX,
//         clamp: [0, 200], // optionally define boundaries for the animation
//       });
//     },
//   });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: X.value,
//         },
//       ],
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <TapGestureHandler onGestureEvent={eventHandler}>
//         <Animated.View style={[styles.box, uas]} />
//       </TapGestureHandler>
//       <PanGestureHandler onGestureEvent={eventHandler1}>
//         <Animated.View style={[styles.box, uas1]} />
//       </PanGestureHandler>
//       <PanGestureHandler onGestureEvent={eventHandler1}>
//         <Animated.View style={[styles.box, uas1]} />
//       </PanGestureHandler>
//       <PanGestureHandler onGestureEvent={gestureHandler}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//       </PanGestureHandler>
//       {/* <Button
//         onPress={() => {
//           // offset.value = withSpring(Math.random());
//           // offset.value = Math.random();
//           offset.value = withSpring(Math.random(), {}, isFinished => {
//             if (isFinished) {
//               console.log('finished');
//             } else {
//               console.log('interupted');
//             }
//           });
//         }}
//         title="Move"
//       /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   box: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'red',
//   },
// });
