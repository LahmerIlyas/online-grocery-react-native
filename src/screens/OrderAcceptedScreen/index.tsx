import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Pressable } from 'react-native';
import { Success } from './components/success';

export const OrderAcceptedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.image}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        source={require('../../../assets/img/order-accepted-background.png')}>
        <Success style={{ marginTop: 'auto' }} />
        <Text style={styles.title}>Your order has been accepted</Text>
        <Text style={styles.body}>
          Your items has been placed and is on it’s way to being processed
        </Text>

        <Pressable style={styles.button} android_ripple={{radius: 200}}>
          <Text style={styles.buttonText}>Track Order</Text>
        </Pressable>

        <Text style={styles.textButton}>Back to home</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 28,
    lineHeight: 28,
    textAlign: 'center',
    color: '#181725',
    marginTop: 66,
  },
  body: {
    fontSize: 16,
    fontFamily: 'Gilroy-Regular',
    lineHeight: 21,
    textAlign: 'center',
    color: '#7C7C7C',
    marginTop: 20,
  },
  button: {
    borderRadius: 19,
    backgroundColor: '#53B175',
    paddingVertical: 24,
    width: '90%',
    marginTop: 100,
    elevation: 3,
  },
  buttonText: {
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFF9FF',
  },
  textButton: {
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    color: '#181725',
    marginVertical: 24,
  },
});
