/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  FoodDetails,
  Products,
  MyBasket,
  Messages,
  FidelityProgram,
  InfoAndContacts,
  Settings,
  Chats,
  Login,
  Signup,
} from '_screens';
import { CustomDrawer } from '_components';
import { useSelector } from 'react-redux';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function FoodStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={() => ({
          transitionSpec: {
            open: {
              animation: 'spring',
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
              },
            },
          },
        })}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={() => ({
          transitionSpec: {
            open: {
              animation: 'spring',
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
              },
            },
          },
        })}
      />
    </Stack.Navigator>
  );
}

function MessagesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={() => ({
          transitionSpec: {
            open: {
              animation: 'spring',
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
              },
            },
          },
        })}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      // initialRouteName="Login"
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={() => ({
          detachPreviousScreen: true,
          transitionSpec: {
            open: {
              animation: 'spring',
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
              },
            },
          },
        })}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={() => ({
          detachPreviousScreen: true,
          transitionSpec: {
            open: {
              animation: 'spring',
            },
            close: {
              animation: 'timing',
              config: {
                duration: 200,
              },
            },
          },
        })}
      />
    </Stack.Navigator>
  );
}
export default function MainNavigation() {
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  useEffect(() => {}, []);
  return (
    <Drawer.Navigator
      initialRouteName={'FoodStack'}
      drawerType={'slide'}
      backBehavior={'initialRoute'}
      screenOptions={{
        unmountOnBlur: true,
      }}
      edgeWidth={150}
      drawerStyle={{
        width: '85%',
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="FoodStack" component={FoodStack} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="MyBasket" component={MyBasket} />
      <Drawer.Screen name="MessagesStack" component={MessagesStack} />
      <Drawer.Screen name="FidelityProgram" component={FidelityProgram} />
      <Drawer.Screen name="InfoAndContacts" component={InfoAndContacts} />
      {isLoggedIn ? (
        <Drawer.Screen name="Settings" component={Settings} />
      ) : null}
      {!isLoggedIn ? <Drawer.Screen name="Auth" component={AuthStack} /> : null}
    </Drawer.Navigator>
  );
}
