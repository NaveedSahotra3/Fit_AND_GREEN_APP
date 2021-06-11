import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, View, FlatList } from 'react-native';
import { Colors } from '_constants/index';
import { Header, FluidAnimation, AuthRequestModal } from '_components/index';
import { ListHeader, FoodThumbnailCard } from './components';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

export default function Home({ navigation }) {
  const data = useRef([
    'Chillox burger',
    'chicken burger',
    'panneer masala',
    'revula',
    'chicker fried',
    'chicker lollipop',
  ]).current;
  const [show, setShow] = useState(true);
  const { isLoggedIn, user } = useSelector((state) => state.AuthReducer);
  // console.log('islogged in ', isLoggedIn);
  // console.log('user ', user);
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      {!isLoggedIn ? (
        <AuthRequestModal
          show={show}
          firstButtonTitle={'Login'}
          secondButtonTitle={'Continue as Guest'}
          onFirstButtonClick={() => {
            setShow(false);
            navigation.navigate('Auth', { screen: 'Login' });
          }}
          onLastButtonClick={() => {
            setShow(false);
          }}
          onHide={() => {
            setShow(false);
          }}
        />
      ) : null}
      <View style={styles.container}>
        <Header />
        <AnimatedFlatlist
          style={styles.mainList}
          ListHeaderComponent={ListHeader}
          keyExtractor={(item) => item}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <FluidAnimation delay={index * 350}>
                <FoodThumbnailCard
                  onPress={() => {
                    navigation.navigate('FoodDetails');
                  }}
                />
              </FluidAnimation>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.bg,
  },
  mainList: {
    flex: 1,
  },
});
