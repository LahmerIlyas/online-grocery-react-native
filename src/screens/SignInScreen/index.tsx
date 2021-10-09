import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, TextInput } from 'react-native';
import { Icon } from '../../components';
export const SignInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/sign-in-header.png')} style={styles.image} />
      <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

      <View style={styles.phoneNumberInputContainer}>
        <Image source={require('../../../assets/img/country-flag.png')} />
        <Text style={styles.textInput}>+880</Text>
        <TextInput style={[styles.textInput]} placeholder={'Phone number'} />
      </View>
      <Text style={styles.body}>Or connect with social media</Text>

      <Pressable style={styles.googleButton}>
        <Icon style={styles.buttonIcon} color={'white'} size={30} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </Pressable>
      <Pressable style={styles.facebookButton}>
        <Icon style={styles.buttonIcon} color={'white'} size={30} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </Pressable>
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
  },
  title: {
    color: '#030303',
    fontFamily: 'GilroySemiBold',
    fontSize: 26,
    marginTop: 'auto',
    marginLeft: 25,
  },
  phoneNumberInputContainer: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    marginHorizontal: 25,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    marginTop: 30,
    color: '#828282',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'GilroyRegular',
  },
  googleButton: {
    marginHorizontal: 25,
    marginTop: 20,
    paddingVertical: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: '#5383EC',
  },
  facebookButton: {
    marginHorizontal: 25,
    marginTop: 20,
    paddingVertical: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    backgroundColor: '#4A66AC',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontFamily: 'GilroySemiBold',
  },
  buttonIcon: {
    position: 'absolute',
    left: 19,
  },
  textInput: {
    color: '#030303',
    fontSize: 18,
    fontFamily: 'GilroyMedium',
    marginLeft: 12,
    paddingVertical: 12,
  },
});
