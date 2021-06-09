import React, { useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
export default function ChatInput({ textMessage, setTextMessage }) {
  const mountingAnimation = useSharedValue(0);
  useEffect(() => {
    mountingAnimation.value = withSpring(1, {
      stiffness: 60,
    });
  }, [mountingAnimation]);
  const mountingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            mountingAnimation.value,
            [0, 0.9, 1],
            [0.5, 1.1, 1]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.container, mountingStyle]}>
      <TouchableRipple style={styles.smileTouchable}>
        <FeatherIcon name={'smile'} size={17} color={'#000'} />
      </TouchableRipple>
      <View style={styles.messageInputContainer}>
        <TextInput
          placeholder={'Type a message…'}
          // placeholderTextColor={'#8e9393'}
          placeholderTextColor={'#000'}
          multiline
          style={styles.messageInput}
          value={textMessage}
          onChangeText={setTextMessage}
        />
      </View>
      <View
        style={[
          styles.actionContainer,
          { alignSelf: textMessage === '' ? 'auto' : 'flex-end' },
        ]}
      >
        {textMessage === '' ? (
          <>
            <TouchableRipple style={styles.actionTouchable}>
              <FeatherIcon name={'paperclip'} size={17} color={'#000'} />
            </TouchableRipple>
            <TouchableRipple style={styles.actionTouchable}>
              <FeatherIcon name={'camera'} size={17} color={'#000'} />
            </TouchableRipple>
            <TouchableRipple style={styles.actionTouchable}>
              <FeatherIcon name={'mic'} size={17} color={'#000'} />
            </TouchableRipple>
          </>
        ) : (
          <TouchableRipple
            // onPress={this.handleSendMessage}
            style={styles.sendButton}
          >
            <FeatherIcon
              name={'send'}
              style={{
                transform: [
                  {
                    rotate: '45deg',
                  },
                ],
              }}
              color={'#fafafa'}
              size={20}
            />
          </TouchableRipple>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    backgroundColor: '#fff',
    elevation: 15,
    borderRadius: 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  smileTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 16,
  },
  messageInputContainer: {
    flex: 5,
  },
  messageInput: { maxHeight: 100, color: '#000' },
  actionContainer: {
    flex: 2.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 4,
  },
  actionTouchable: { paddingHorizontal: '3%' },
  sendButton: {
    backgroundColor: '#047b7b',
    height: 40,
    width: 40,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
