import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Icon } from '../../../components';

export interface CartItemCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}
export const CartItemCard: React.FC<CartItemCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={{ marginRight: 'auto', marginLeft: 25 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 13 }}>
          <Text style={styles.iconButton}>-</Text>
          <Text style={styles.quantity}>1</Text>
          <Icon style={styles.iconButton} name="plus" color="#53B175" />
        </View>
      </View>
      <View style={{ justifyContent: 'space-between' }}>
        <Icon name="close" style={{ alignSelf: 'flex-end' }} />
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'rgba(226, 226, 226, 1.0)',
    paddingVertical: 30,
    marginHorizontal: 25,
  },
  image: {},
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    color: '#181725',
  },
  description: {
    fontFamily: 'GilroyMedium',
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 5,
  },
  iconButton: {
    width: 45.66999816894531,
    height: 45.66844940185547,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1.0)',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  price: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: '#181725',
  },
  quantity: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#181725',
    marginHorizontal: 16,
  },
});
