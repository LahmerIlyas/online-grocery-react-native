import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

interface DividerProps {
  style?: StyleProp<ViewStyle>;
}
export const Divider: React.FC<DividerProps> = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(226, 226, 226, 0.7)',
  },
});
