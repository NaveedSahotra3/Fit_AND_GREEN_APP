import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header, AnimationQueue } from '_components';
import { List } from 'react-native-paper';
import { Colors } from '_constants';
export default function InfoAndContacts() {
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
              <Text style={styles.midComponentText}>Info & Contacts</Text>
            </View>
          }
          RightComponent={null}
        />
        <View style={styles.itemContainer}>
          <AnimationQueue>
            <List.Item
              onPress={() => {}}
              title={'Address'}
              style={styles.listStyle}
              titleStyle={styles.listTitle}
              description={'21 rue de mounthox 1201 Guneva'}
              descriptionStyle={styles.listDescription}
              left={(props) => (
                <List.Icon {...props} color={'#3C9B46'} icon={'map-marker'} />
              )}
            />
            <List.Item
              onPress={() => {}}
              title={'Phone'}
              style={styles.listStyle}
              titleStyle={styles.listTitle}
              description={'+41767835841'}
              descriptionStyle={styles.listDescription}
              left={(props) => (
                <List.Icon
                  {...props}
                  color={'#3C9B46'}
                  icon={'cellphone-android'}
                />
              )}
            />
            <List.Item
              onPress={() => {}}
              title={'Email'}
              style={styles.listStyle}
              titleStyle={styles.listTitle}
              description={'agcpcompany@mailto.com'}
              descriptionStyle={styles.listDescription}
              left={(props) => (
                <List.Icon {...props} color={'#3C9B46'} icon={'email'} />
              )}
            />
          </AnimationQueue>
        </View>
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
    transform: [
      {
        translateX: -18,
      },
    ],
  },
  midComponentText: {
    color: '#eee',
    fontFamily: 'GothamMedium',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: '5%',
  },
  listTitle: {
    fontSize: 20,
    fontFamily: 'GothamBold',
    color: '#302f3c',
  },
  listDescription: {
    fontSize: 15,
    fontFamily: 'GothamMedium',
  },
  listStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
