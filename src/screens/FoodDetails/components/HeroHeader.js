import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HeroHeader() {
  const { height } = useWindowDimensions();
  return (
    <View
      style={[
        styles.heroContainer,
        {
          height: height * 0.35,
        },
      ]}
    >
      <View style={styles.heroImageAndQuantityContainer}>
        <View style={styles.heroImageWrapper}>
          <Image
            style={styles.heroImage}
            source={require('../../../assets/images/burger.jpg')}
          />
        </View>
        <View style={styles.quantityContainer}>
          <Icon name={'minus'} color={'#363853'} size={20} />
          <Text style={styles.quantityText}>6</Text>
          <Icon name={'plus'} color={'#ff6838'} size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    width: '100%',
    backgroundColor: '#fff',
    // paddingTop: '1%',
  },
  heroImageAndQuantityContainer: {
    height: '90%',
    width: '100%',
  },
  heroImageWrapper: {
    elevation: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  quantityContainer: {
    position: 'absolute',
    width: '40%',
    height: '25%',
    backgroundColor: '#fff',
    top: '100%',
    left: '50%',
    borderRadius: 12,
    paddingHorizontal: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: [
      {
        translateX: -80,
      },
      {
        translateY: -34,
      },
    ],
    elevation: 40,
  },
  quantityText: {
    fontSize: 30,
    fontFamily: 'GothamMedium',
    color: '#302f3c',
  },
});
