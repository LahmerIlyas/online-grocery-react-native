import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartItemCard } from './components/CartItemCard';
import { data } from './data';

export const CartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <ScrollView contentContainerStyle={{ marginTop: 35 }}>
        {data.map((item) => (
          <CartItemCard {...item} />
        ))}
      </ScrollView>
      <Pressable style={styles.button} android_ripple={{ radius: 200 }}>
        <Text style={styles.buttonText}>Go to Checkout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#181725',
    marginTop: 55,
  },
  button: {
    borderRadius: 19,
    backgroundColor: '#53B175',
    paddingVertical: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    marginHorizontal: 25,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
    color: '#FCFCFC',
  },
});
