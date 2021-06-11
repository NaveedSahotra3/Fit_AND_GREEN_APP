/* eslint-disable react-native/no-inline-styles */
import {
  DrawerContentScrollView,
  useIsDrawerOpen,
} from '@react-navigation/drawer';
import React, { useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, IconButton, List, Switch, Divider } from 'react-native-paper';
import WithSection from './WithSection';
import AnimationQueue from './AnimationQueue';
import { Colors } from '_constants';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../redux/actions/AuthActions';
export default function CustomDrawer(props) {
  const isOpen = useIsDrawerOpen();
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const {
    state,
    // descriptors,
    navigation,
  } = props;
  //   const {routes}=state;
  const RouteList = useRef([
    {
      _id: 'home',
      name: 'Home',
      navigateTo: 'FoodStack',
      iconName: 'home',
    },
    {
      _id: 'products',
      name: 'Products',
      navigateTo: 'Products',
      iconName: 'menu',
    },
    {
      _id: 'myCart',
      name: 'My Basket',
      navigateTo: 'MyBasket',
      iconName: 'basket',
    },
    {
      _id: 'messages',
      name: 'Messages',
      navigateTo: 'MessagesStack',
      iconName: 'message-processing',
    },
    {
      _id: 'fidelityProgram',
      name: 'Fidelity Program',
      navigateTo: 'FidelityProgram',
      iconName: 'star',
    },
    {
      _id: 'info&contacts',
      name: 'Info & Contacts',
      navigateTo: 'InfoAndContacts',
      iconName: 'information',
    },
    {
      _id: 'settings',
      name: 'Settings',
      navigateTo: 'Settings',
      iconName: 'cog-outline',
    },
  ]).current;
  const onLogOut = () => {
    dispatch(LogOut());
  };
  return (
    <DrawerContentScrollView {...props}>
      {isOpen ? (
        <>
          <View style={styles.Header}>
            <AnimationQueue delay={50}>
              <Text style={styles.brandTitle}>Welcome to Green & Fit Food</Text>
              {!isLoggedIn ? (
                <>
                  <Text style={styles.loggingRequestTitle}>
                    Discover all possibilities by logging in
                  </Text>
                  <View style={styles.authButtonContainer}>
                    <Button
                      style={styles.AuthButton}
                      labelStyle={styles.authButtonLabel}
                      mode={'contained'}
                      onPress={() => {
                        navigation.navigate('Auth', { screen: 'Login' });
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={styles.authButtonOutline}
                      labelStyle={styles.outlineButtonText}
                      mode={'outlined'}
                      onPress={() => {
                        navigation.navigate('Auth', { screen: 'Signup' });
                      }}
                    >
                      Create Account
                    </Button>
                  </View>
                </>
              ) : null}
              <WithSection title={'Change Shop'} titleSize={16}>
                <View style={styles.shopDetailContainer}>
                  <Text style={styles.shopAddress}>
                    21 re du,Monthoux,1201 Geneva
                  </Text>
                  <IconButton
                    icon={'phone'}
                    size={28}
                    color={Colors.primary.bg_sat}
                  />
                </View>
              </WithSection>
            </AnimationQueue>
          </View>
          <Divider />
          <View style={styles.RouteList}>
            <AnimationQueue delay={70}>
              {RouteList.map((item, i) => {
                if (item._id == 'settings' && !isLoggedIn) return null;
                const active = i === state.index;
                return (
                  <List.Item
                    key={item._id}
                    style={[
                      {
                        backgroundColor: active
                          ? Colors.primary.bg_sat
                          : '#fff',
                      },
                      active
                        ? {
                            borderTopRightRadius: 12,
                            borderBottomRightRadius: 12,
                            marginRight: 20,
                            elevation: 15,
                          }
                        : {},
                    ]}
                    left={(p) => (
                      <List.Icon
                        {...p}
                        icon={item.iconName}
                        color={active ? '#ffffff' : '#302f3c'}
                      />
                    )}
                    title={item.name}
                    titleStyle={{
                      color: active ? '#ffffff' : '#302f3c',
                      fontFamily: active ? 'GothamMedium' : 'GothamLight',
                    }}
                    onPress={() => {
                      navigation.navigate(item.navigateTo);
                    }}
                  />
                );
              })}
              {isLoggedIn ? (
                <List.Item
                  style={{
                    backgroundColor: '#fff',
                  }}
                  left={(p) => (
                    <List.Icon {...p} icon={'logout'} color={'#302f3c'} />
                  )}
                  title={'Logout'}
                  titleStyle={{
                    color: '#302f3c',
                    fontFamily: 'GothamLight',
                  }}
                  onPress={onLogOut}
                />
              ) : null}
            </AnimationQueue>
          </View>
          <Divider />
          <View style={styles.langAndStdStore}>
            <AnimationQueue delay={100}>
              <View style={styles.langSec}>
                <Text>Language</Text>
                <Text>English</Text>
              </View>
              <View style={styles.StdStoreSec}>
                <Text>Set as standard store</Text>
                <Switch />
              </View>
            </AnimationQueue>
          </View>
        </>
      ) : null}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    paddingHorizontal: '3%',
    paddingVertical: '4%',
  },
  brandTitle: {
    fontFamily: 'GothamBold',
    color: '#302f3c',
    fontSize: 20,
  },
  loggingRequestTitle: {
    fontFamily: 'GothamBold',
    color: 'rgba(48, 47, 60, 0.5)',
  },
  shopDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shopAddress: {
    fontSize: 14,
    fontFamily: 'GothamMedium',
    color: 'rgba(48, 47, 60, 0.6)',
  },
  authButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  AuthButton: {
    backgroundColor: Colors.primary.bg_sat,
    borderRadius: 8,
  },
  authButtonLabel: {
    fontFamily: 'GothamBold',
  },
  authButtonOutline: {
    borderColor: Colors.primary.bg_sat,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  outlineButtonText: {
    color: Colors.primary.bg_sat,
    fontFamily: 'GothamBold',
  },
  langAndStdStore: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },
  langSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  StdStoreSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
