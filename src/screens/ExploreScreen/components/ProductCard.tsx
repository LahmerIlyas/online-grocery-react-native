import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Pressable } from 'react-native';
import { Icon } from '../../../components';

export interface ProductDetailCardProps {
  image: ImageSourcePropType;
  price: string;
  title: string;
  description: string;
}

export const ProductDetailCard: React.FC<ProductDetailCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.bottomSectionContainer}>
        <Text style={styles.price}>{props.price}</Text>
        <Pressable style={styles.button}>
          <Icon style={styles.buttonIcon} color={'white'} size={15} name="plus"/>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#E2E2E2',
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 10,
    marginRight: 15
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 120,
    minWidth: 120
  },
  title: {
    marginTop: 5,
    color: '#181725',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
  description: {
    color: '#7C7C7C',
    fontSize: 14,
    fontFamily: 'GilroyMedium',
  },
  bottomSectionContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#181725',
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#53B175',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  buttonIcon: {},
});
