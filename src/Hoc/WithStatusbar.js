import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '_constants';
export default function WithStatusbar(component) {
  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={Colors.primary.bg_sat}
      />
      {component}
    </>
  );
}
