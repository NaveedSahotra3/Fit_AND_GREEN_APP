import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chip } from '_components';
export default function FoodDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.tileSubtitleAndPrice}>
        <View style={styles.titleAndSubtitleContainer}>
          <Text style={styles.title}>Beef Burger</Text>
          <Text style={styles.subTitle}>Beef patty and special souce</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text style={styles.dollarText}>$</Text>
            7.99
          </Text>
        </View>
      </View>
      <View style={styles.chipContainer}>
        <Chip
          title={'Free'}
          iconType={'materialIcon'}
          iconName={'delivery-dining'}
          iconColor={'#e1ad01'}
        />
        <Chip
          title={'10-20mins'}
          iconType={'materialCommunityIcon'}
          iconName={'clock'}
          iconColor={'#b11226'}
        />
        <Chip
          title={'4.8'}
          iconName={'star'}
          iconType={'antDesign'}
          iconColor={'#ff6838'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '6%',
    paddingVertical: '4%',
  },
  tileSubtitleAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  withHorizontalMargin: {
    marginHorizontal: 10,
  },
  titleAndSubtitleContainer: {
    flex: 2.5,
    // backgroundColor: 'red',
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '5%',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Black',
    fontSize: 31,
    color: '#302f3c',
  },
  subTitle: {
    fontFamily: 'GothamMedium',
    color: 'rgba(48,47,60,.5)',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dollarText: {
    fontFamily: 'GothamBold',
    fontSize: 18,
    color: '#ff6838',
  },
  priceText: {
    fontFamily: 'GothamMedium',
    fontSize: 31,
    color: '#302f3c',
  },
});
