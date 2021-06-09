/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { AnimationQueue, Header, WithSection } from '_components';
import { Surface, IconButton } from 'react-native-paper';
import { StickyButton } from '_components';
import { Colors } from '_constants';

export default function MyBasket() {
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <ScrollView>
          <AnimationQueue>
            <Header forceDrawer={true} />
            <View
              style={{
                paddingHorizontal: '3%',
                paddingVertical: '4%',
              }}
            >
              <Text style={styles.titleText}>My Basket</Text>
            </View>
            <View style={styles.shortSummary}>
              <View
                style={[styles.itemCountSection, styles.justifyAlignCenter]}
              >
                <Text style={[styles.h2, styles.colorWhite]}>Item</Text>
                <Text style={[styles.h3, styles.colorWhite]}>1</Text>
              </View>
              <View
                style={[styles.itemAmountSection, styles.justifyAlignCenter]}
              >
                <Text style={[styles.h2, styles.colorWhite]}>Total</Text>
                <Text style={[styles.h3, styles.colorWhite]}>$10.90</Text>
              </View>
            </View>
            <View style={styles.currentItemsContainer}>
              <WithSection title={'Current Items'}>
                <Surface style={styles.surface}>
                  <View style={styles.itemDetailsContainer}>
                    <Image
                      style={styles.currentItemImage}
                      source={require('../../assets/images/burger.jpg')}
                    />
                    <View style={styles.itemDetails}>
                      <Text style={styles.itemDetailsTitle}>
                        Chicken Burger
                      </Text>
                      <Text style={styles.itemDetailsIng}>+ Medium</Text>
                      <Text style={styles.itemDetailsIng}>+ Sushi rice</Text>
                      <Text style={styles.itemDetailsIng}>+ No Cutlery</Text>
                    </View>
                  </View>
                  <View style={styles.actionContainer}>
                    <View style={styles.itemIncrementor}>
                      <IconButton
                        onPress={() => {}}
                        // style={{ backgroundColor: 'red' }}
                        color={'red'}
                        icon={'minus'}
                      />
                      <Text style={styles.itemCountText}>1</Text>
                      <IconButton
                        onPress={() => {}}
                        // style={{ backgroundColor: 'green' }}
                        icon={'plus'}
                        color={'green'}
                      />
                    </View>
                    <Text style={styles.totalText}>Total:$10.99</Text>
                    <IconButton
                      onPress={() => {}}
                      color={'grey'}
                      icon={'pencil'}
                    />
                    <IconButton
                      onPress={() => {}}
                      color={'red'}
                      icon={'delete'}
                    />
                  </View>
                </Surface>
              </WithSection>
            </View>
          </AnimationQueue>
        </ScrollView>
        <StickyButton title={'Order for $10.99'} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  titleText: {
    color: '#302f3c',
    fontFamily: 'PlayfairDisplay-Black',
    fontSize: 28,
  },
  shortSummary: {
    flexDirection: 'row',
    width: '100%',
  },
  justifyAlignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
  },
  itemCountSection: {
    backgroundColor: 'rgba(60,155,70,0.92)',
  },
  itemAmountSection: {
    backgroundColor: 'rgba(60,155,70,1)',
  },
  h2: {
    fontSize: 15,
    fontFamily: 'GothamBold',
  },
  h3: {
    fontFamily: 'GothamBold',
    fontSize: 14,
  },
  colorWhite: {
    color: '#f3f3f3',
  },
  surface: {
    padding: 10,
    paddingBottom: 0,
    width: '100%',
    elevation: 4,
    marginTop: '4%',
  },
  currentItemsContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '5%',
  },
  itemDetailsContainer: {
    flexDirection: 'row',
  },
  itemIncrementor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentItemImage: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    marginRight: 10,
  },
  itemDetails: {
    flex: 3,
  },
  itemDetailsTitle: {
    fontFamily: 'GothamBold',
    fontSize: 16,
    color: '#302f3c',
  },
  itemDetailsIng: {
    fontFamily: 'GothamBold',
    color: 'rgba(48, 47, 60, 0.5)',
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCountText: {
    fontFamily: 'GothamMedium',
    fontSize: 18,
  },
  totalText: {
    fontFamily: 'GothamMedium',
    fontSize: 15,
    color: '#302f3c',
  },
});
