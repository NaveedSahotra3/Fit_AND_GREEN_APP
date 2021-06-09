import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import { Header, WithSection, AnimationQueue, StickyButton } from '_components';
import { Colors } from '_constants';
import { HeroHeader, FoodDetail } from './components';

export default function FoodDetails(props) {
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentStyle}
        >
          <AnimationQueue>
            <Header />
            <HeroHeader />
            <FoodDetail />
            <WithSection title={'About'} style={styles.WithSectionContainer}>
              <Text style={styles.aboutPara}>
                The special beef burger uses special quality beef with sliced Do
                laborum labore veniam non.Sunt mollit ea nisi ipsum eiusmod
                ipsum nulla occaecat. Officia cillum veniam laboris excepteur id
                sunt dolor do aliquip non.Officia aliqua labore esse proident
                anim sint esse commodo ullamco do dolor irure. Eu ea pariatur et
                id esse ipsum minim esse Lorem officia anim nulla ea. Consequat
                dolore Lorem fugiat dolore voluptate elit velit. Non qui culpa
                officia ex aute mollit. Minim qui pariatur aliqua aliquip
                laborum consectetur est. Eu pariatur pariatur ipsum ipsum nulla
                voluptate. Et anim officia aliqua sunt aute elit do sit eu
                exercitation irure.
              </Text>
            </WithSection>
          </AnimationQueue>
        </ScrollView>
        <StickyButton title={'Add to Basket($7.99)'} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: { flex: 1 },
  scrollViewContentStyle: { paddingBottom: '25%' },
  WithSectionContainer: {
    paddingLeft: '6%',
  },
  aboutPara: {
    color: 'rgba(48,47,60,.5)',
    fontSize: 14,
    fontFamily: 'GothamMedium',
    lineHeight: 18,
    marginTop: '3%',
  },
});
