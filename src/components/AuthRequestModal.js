import React from 'react';
import { Pressable, StyleSheet, Text, StatusBar, View } from 'react-native';
import AnimationQueue from './AnimationQueue';
import { Colors } from '_constants/index';
import FluidAnimation from './FluidAnimation';

//modal to show when user is not logged in
//ask whether he wants to login or continue as guest
export default function AuthRequestModal({
  show = true,
  onHide,
  onFirstButtonClick = () => {},
  onLastButtonClick = () => {},
  firstButtonTitle = '',
  secondButtonTitle = '',
}) {
  if (!show) return null;
  return (
    <>
      <StatusBar backgroundColor={'rgba(0,0,0,0.9)'} />
      <Pressable style={styles.fullScreenPressable} onPress={onHide}>
        <FluidAnimation>
          <View style={styles.container} onStartShouldSetResponder={() => true}>
            <AnimationQueue>
              <Pressable
                style={[styles.pressableButton, styles.filled, styles.rounded]}
                onPress={onFirstButtonClick}
              >
                <Text style={[styles.filledText, styles.buttonText]}>
                  {firstButtonTitle}
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.pressableButton,
                  styles.outlined,
                  styles.rounded,
                ]}
                onPress={onLastButtonClick}
              >
                <Text style={[styles.outlinedText, styles.buttonText]}>
                  {secondButtonTitle}
                </Text>
              </Pressable>
            </AnimationQueue>
          </View>
        </FluidAnimation>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreenPressable: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    paddingVertical: '15%',
  },
  container: {
    width: '90%',
    paddingVertical: 52,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableButton: {
    paddingVertical: 12,
    paddingHorizontal: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: Colors.primary.bg_dark,
    marginBottom: 20,
  },
  outlined: {
    borderWidth: 1,
    borderColor: Colors.primary.bg_dark,
  },
  rounded: {
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'GothamMedium',
    fontSize: 18,
  },
  filledText: {
    color: '#ccc',
  },
  outlinedText: {
    color: Colors.primary.bg_dark,
  },
});
