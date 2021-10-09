import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Pressable, Dimensions } from 'react-native';
import Carrot from '../../../assets/svg/carrot';
export const OnBoardingScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../../assets/img/on-boarding-background-image.png')}
      style={styles.container}
      imageStyle={styles.image}>
      <Carrot style={{ marginTop: Dimensions.get('window').height / 2 }} />
      <Text style={styles.title} numberOfLines={2}>
        Welcome{'\n'}to our store
      </Text>
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
  image: {
    height: '100%',
    width: 'auto',
  },
  title: {
    color: 'white',
    fontFamily: 'GilroySemiBold',
    fontSize: 48,
    textAlign: 'center',
    marginTop: 16,
  },
  body: {
    color: 'rgba(252, 252, 252, 0.7)',
    fontSize: 16,
    fontFamily: 'GilroyMedium',
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
    color: '#FFF9FF',
    fontSize: 18,
    fontFamily: 'GilroySemiBold',
  },
});
