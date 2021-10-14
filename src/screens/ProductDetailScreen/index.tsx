import React, { Fragment } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Icon, ParallaxScrollView } from '../../components';

export const ProductDetailScreen: React.FC = () => {
  return (
    <ParallaxScrollView
      minHeight={100}
      maxHeight={300}
      renderHeader={() => (
        <Image
          source={require('../../../assets/img/big-product-detail.png')}
          style={{ width: '100%', resizeMode: 'contain' }}
        />
      )}
      headerContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F3F2',
      }}
      renderFixedForeground={() => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Icon size={30} />
          <Icon size={30} />
        </View>
      )}
      minOverlayOpacity={0}
      maxOverlayOpacity={1}
      overlayColor={'red'}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Naturel Red Apple</Text>
        <Icon size={30} />
      </View>

      <Text style={styles.subtitle}>1kg, Price</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 30,
        }}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon size={25} />
          <Text style={styles.quantity}>1</Text>
          <Icon size={25} />
        </Pressable>
        <Text style={styles.price}>$4.99</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 18,
          paddingTop: 18,
          marginHorizontal: 16,
          borderTopWidth: 1,
          borderColor: 'rgba(226, 226, 226, 0.7)',
        }}>
        <Text style={[styles.title, { fontFamily: 'GilroySemiBold' }]}>Product Detail</Text>
        <Icon size={25} />
      </View>
      <Text style={styles.body}>
        Apples are nutritious. Apples may be good for weight loss. apples may be good for your
        heart. As part of a healtful and varied diet.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 18,
          paddingTop: 18,
          marginHorizontal: 16,
          borderTopWidth: 1,
          borderColor: 'rgba(226, 226, 226, 0.7)',
        }}>
        <Text style={[styles.title, { fontFamily: 'GilroySemiBold' }]}>Nutritions</Text>
        <Icon size={25} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 18,
          paddingTop: 18,
          marginHorizontal: 16,
          borderTopWidth: 1,
          borderColor: 'rgba(226, 226, 226, 0.7)',
        }}>
        <Text style={[styles.title, { fontFamily: 'GilroySemiBold' }]}>Review</Text>
        <Icon size={25} />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </Pressable>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    color: '#181725',
  },
  subtitle: {
    fontFamily: 'GilroyRegular',
    fontSize: 16,
    color: '#7C7C7C',
    marginHorizontal: 16,
    marginTop: 10,
  },
  quantity: {
    width: 45.66999816894531,
    height: 45.66844940185547,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgba(226, 226, 226, 1.0)',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 20,
  },
  price: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    color: '#181725',
  },
  body: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#7C7C7C',
    marginTop: 18,
    marginHorizontal: 16,
    lineHeight: 21,
  },
  button: {
    borderRadius: 19,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    marginHorizontal: 25,
  },
  buttonText: {
    fontFamily: 'GilroyMedium',
    fontSize: 18,
    lineHeight: 18,
    color: '#FFF9FF',
  },
});
