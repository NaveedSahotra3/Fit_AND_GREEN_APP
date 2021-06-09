/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { CategoryChip } from '_components';
import { Colors } from '_constants';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

function ListHeader() {
  const data = useRef([
    'pizza',
    'burger',
    'chapati',
    'paneer',
    'momos',
    'chicken',
    'fries',
    'manchurian',
    'ice cream',
  ]).current;
  const [categoryActive, setCategoryActive] = useState('');

  return (
    <View>
      <Text style={styles.heading}>
        What do you want for <Text style={styles.headingHighlight}>Dinner</Text>
      </Text>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHeading}>Categories</Text>
        <View style={styles.categoriesListContainer}>
          <AnimatedFlatlist
            horizontal
            style={{
              height: 50,
              width: '100%',
            }}
            contentContainerStyle={{
              paddingLeft: '5%',
            }}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <CategoryChip
                  title={item}
                  onPress={setCategoryActive}
                  active={categoryActive === item}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#120d06',
    fontSize: 32,
    paddingHorizontal: '10%',
    paddingTop: '5%',
    paddingBottom: '2%',
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'PlayfairDisplay-Bold',
  },
  headingHighlight: {
    color: Colors.primary.bg_dark,
  },
  categoriesContainer: {
    width: '100%',
    // flex: 1,
    paddingTop: '5%',
  },
  categoriesHeading: {
    marginLeft: '4%',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'GothamBold',
  },
  categoriesListContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingVertical: '5%',
  },
  categoriesList: {
    width: '100%',
  },
});

export default ListHeader;
