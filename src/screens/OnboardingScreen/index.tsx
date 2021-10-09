import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import Carrot from '../../../assets/svg/carrot';
export const OnBoardingScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../../assets/img/on-boarding-background-image.png')}
      style={styles.container}
    
      >
      <Carrot />
      <Text style={styles.title} numberOfLines={2}>Welcome to our store</Text>
      <Text style={styles.body}>Get your groceries in as fast as one hour</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  title: {
    color: 'white',
    marginTop: 35,
  },
  body: {
    color: 'white',
    marginTop: 19,
  },
  button: {
    marginTop: 40,
    paddingVertical: 25,
    backgroundColor: '#53B175',
    borderRadius: 19,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  }
});
