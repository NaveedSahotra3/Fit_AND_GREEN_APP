import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Header, Button } from '_components';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimationQueue } from '_components';
import { Colors } from '_constants';
export default function Login({ navigation }) {
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      <View style={styles.container}>
        <ScrollView style={styles.flex}>
          <Header
            MidComponent={
              <View style={styles.MidComponent}>
                <Text style={styles.MidComponentText}>Login</Text>
              </View>
            }
          />
          <View style={styles.inputWrapper}>
            <AnimationQueue>
              <Text style={[styles.h1, styles.gothamBold]}>Hey,</Text>
              <Text
                style={[styles.h3, styles.gothamMedium, styles.saturatedColor]}
              >
                Log-In Here
              </Text>
              <View style={[styles.inputContainer, styles.marginTop]}>
                <Icon name={'person'} size={24} />
                <TextInput style={styles.input} placeholder={'E-mail'} />
              </View>
              <View style={[styles.inputContainer]}>
                <Icon name={'lock-open'} size={24} />
                <TextInput style={styles.input} placeholder={'Password'} />
              </View>
            </AnimationQueue>
            <View style={styles.buttonContainer}>
              <Button title={'Login'} onPress={() => {}} />
            </View>
            <View style={styles.optionHint}>
              <AnimationQueue delay={200}>
                <View style={styles.optionContainer}>
                  <Text style={styles.labelText}>Don't have account?</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}
                  >
                    <Text style={styles.highlightText}>Signup</Text>
                  </Pressable>
                </View>
                <View style={styles.optionContainer}>
                  <Text style={styles.labelText}>Forgot your password?</Text>
                  <Pressable onPress={() => {}}>
                    <Text style={styles.highlightText}>Click Here</Text>
                  </Pressable>
                </View>
              </AnimationQueue>
            </View>
          </View>
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
  flex: {
    flex: 1,
  },
  inputWrapper: {
    paddingVertical: '4%',
    paddingHorizontal: '5%',
  },
  h1: {
    fontSize: 30,
  },
  h3: {
    fontSize: 23,
  },
  gothamBold: {
    fontFamily: 'GothamBold',
  },
  gothamMedium: {
    fontFamily: 'GothamMedium',
  },
  saturatedColor: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    // justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 6,
    marginVertical: 5,
    paddingHorizontal: 12,
  },
  marginTop: { marginTop: '12%' },
  input: {
    paddingLeft: 18,
    flex: 1,
  },
  buttonContainer: {
    marginTop: '10%',
    marginBottom: '2%',
  },
  optionHint: {
    paddingVertical: '5%',
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '1%',
  },
  labelText: {
    fontFamily: 'GothamLight',
  },
  highlightText: {
    fontFamily: 'GothamBold',
    marginLeft: 2,
    color: '#3C9B46',
  },
  MidComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MidComponentText: {
    fontSize: 18,
    fontFamily: 'GothamMedium',
    color: '#eee',
    textTransform: 'uppercase',
  },
});
