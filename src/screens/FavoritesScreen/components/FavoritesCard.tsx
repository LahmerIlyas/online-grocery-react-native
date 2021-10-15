import React from 'react';
import { Text, View, StyleSheet, ImageSourcePropType, Image } from 'react-native';
import { Icon } from '../../../components';

export interface FavoritesCardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}
export const FavoritesCard: React.FC<FavoritesCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={{ marginRight: 'auto', marginLeft: 35 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.price}>{props.price}</Text>
        <Icon style={styles.icon} name="arrow-right" color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E2E2E2',
    marginHorizontal: 25,
    paddingVertical: 30
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
  },
  price: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    color: '#181725',
    marginRight: 16,
  },
  icon: {},
});
