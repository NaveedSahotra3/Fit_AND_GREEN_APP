/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { Header, AnimationQueue, WithSection, CategoryChip } from '_components';
import { Divider, List, Searchbar } from 'react-native-paper';
import { Colors } from '_constants';
export default function Products() {
  const [categoryActive, setCategoryActive] = useState('');
  const onPressCategory = useCallback(
    (item) => {
      setCategoryActive(item);
    },
    [setCategoryActive]
  );
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
              <Text style={styles.titleText}>Choose a Product</Text>
              <Searchbar
                style={{
                  borderRadius: 50,
                  paddingVertical: '1%',
                }}
                placeholder={'Search Products'}
              />
            </View>
            <View style={styles.categoriesListContainer}>
              <FlatList
                horizontal
                style={{
                  height: 50,
                  width: '94%',
                  alignSelf: 'center',
                }}
                contentContainerStyle={{}}
                showsHorizontalScrollIndicator={false}
                data={['House Favourites', 'Make your own Bowl', 'Side Dishes']}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  return (
                    <CategoryChip
                      title={item}
                      onPress={onPressCategory}
                      active={categoryActive === item}
                    />
                  );
                }}
              />
            </View>
            <View style={{ paddingHorizontal: '4%', paddingTop: '5%' }}>
              <WithSection title={'Make Your own Bowl'}>
                <AnimationQueue>
                  <Divider style={{ marginVertical: 10 }} />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                      <List.Item
                        onPress={() => {}}
                        title={'Medium'}
                        description={
                          'Lets your creativity runs free and be the artist of your own'
                        }
                        descriptionNumberOfLines={2}
                      />
                      <Text style={{ marginLeft: '6%' }}>$10.90</Text>
                    </View>
                    <Image
                      style={{
                        flex: 1,
                        aspectRatio: 1,
                        resizeMode: 'cover',
                        borderRadius: 12,
                      }}
                      source={require('../../assets/images/burger.jpg')}
                    />
                  </View>
                  <Divider style={{ marginVertical: 10 }} />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                      <List.Item
                        onPress={() => {}}
                        title={'Large'}
                        description={
                          'Lets your creativity runs free and be the artist of your own'
                        }
                        descriptionNumberOfLines={2}
                      />
                      <Text style={{ marginLeft: '6%' }}>$10.90</Text>
                    </View>
                    <Image
                      style={{
                        flex: 1,
                        aspectRatio: 1,
                        resizeMode: 'cover',
                        borderRadius: 12,
                      }}
                      source={require('../../assets/images/burger.jpg')}
                    />
                  </View>
                  <Divider style={{ marginVertical: 10 }} />
                </AnimationQueue>
              </WithSection>
            </View>
            <View style={{ paddingHorizontal: '4%', paddingTop: '5%' }}>
              <WithSection title={'Side Dishes'}>
                <AnimationQueue>
                  <Divider style={{ marginVertical: 10 }} />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                      <List.Item
                        onPress={() => {}}
                        title={'Basic Nachos'}
                        description={
                          'Crispy mexican nachos with healty guacamole'
                        }
                        descriptionNumberOfLines={2}
                      />
                      <Text style={{ marginLeft: '6%' }}>$10.90</Text>
                    </View>
                    <Image
                      style={{
                        flex: 1,
                        aspectRatio: 1,
                        resizeMode: 'cover',
                        borderRadius: 12,
                      }}
                      source={require('../../assets/images/burger.jpg')}
                    />
                  </View>
                  <Divider style={{ marginVertical: 10 }} />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                      <List.Item
                        onPress={() => {}}
                        title={'Full option nachos'}
                        description={'Crispy mexican nachos with farm chicken'}
                        descriptionNumberOfLines={2}
                      />
                      <Text style={{ marginLeft: '6%' }}>$10.90</Text>
                    </View>
                    <Image
                      style={{
                        flex: 1,
                        aspectRatio: 1,
                        resizeMode: 'cover',
                        borderRadius: 12,
                      }}
                      source={require('../../assets/images/burger.jpg')}
                    />
                  </View>
                  <Divider style={{ marginVertical: 10 }} />
                </AnimationQueue>
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
    backgroundColor: '#fff',
    flex: 1,
  },
  titleText: {
    color: '#302f3c',
    fontFamily: 'GothamBold',
    fontSize: 28,
    marginBottom: 18,
  },
});
