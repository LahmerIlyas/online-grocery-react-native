import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../../../assets/svg/splash-screen-logo';
export const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
