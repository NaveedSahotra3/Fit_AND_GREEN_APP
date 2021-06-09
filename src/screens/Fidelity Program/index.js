/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header, WithSection, AnimationQueue } from '_components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, List } from 'react-native-paper';
import { Colors } from '_constants';
export default function FidelityProgram() {
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <Header
          forceDrawer={true}
          MidComponent={
            <View style={styles.MidComponent}>
              <Text style={styles.midComponentText}>
                Fidelity Program & Promotions
              </Text>
            </View>
          }
          RightComponent={null}
        />
        <ScrollView>
          <AnimationQueue>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome Mr. X</Text>
            </View>
            <View style={styles.promotionTextContainer}>
              <Icon name={'certificate'} size={38} color={'rgb(60,155,70)'} />
              <View>
                <Text>Propmotion of the month code : XXXXXX</Text>
                <Text>description of the promotion</Text>
              </View>
            </View>
            <View style={styles.pastPromotionsContainer}>
              <WithSection title={'Past Promotions'} titleSize={16}>
                <List.Item
                  title={'-50% on delivery of 4 italian food'}
                  description={'that was fantastic delivery by you'}
                  onPress={() => {}}
                  style={styles.pastPromotionList}
                />
                <Divider style={{ height: 1 }} />
                <List.Item
                  title={'-50% on delivery of 4 italian food'}
                  description={'that was fantastic delivery by you'}
                  onPress={() => {}}
                  style={styles.pastPromotionList}
                />
                <Divider style={{ height: 1 }} />
                <List.Item
                  title={'-50% on delivery of 4 italian food'}
                  description={'that was fantastic delivery by you'}
                  onPress={() => {}}
                  style={styles.pastPromotionList}
                />
                <Divider style={{ height: 1 }} />
                <List.Item
                  title={'-50% on delivery of 4 italian food'}
                  description={'that was fantastic delivery by you'}
                  onPress={() => {}}
                  style={styles.pastPromotionList}
                />
                <Divider style={{ height: 1 }} />
              </WithSection>
            </View>
          </AnimationQueue>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MidComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midComponentText: {
    color: '#eee',
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
  titleContainer: {
    paddingVertical: '4%',
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Black',
    fontSize: 24,
    color: '#302f3c',
  },
  promotionTextContainer: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    paddingVertical: '5%',
    paddingHorizontal: '6%',
    paddingLeft: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pastPromotionsContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '4%',
  },
  pastPromotionList: {
    paddingHorizontal: 0,
  },
});
