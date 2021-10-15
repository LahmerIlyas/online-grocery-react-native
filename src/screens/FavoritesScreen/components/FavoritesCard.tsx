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
      <View style={{ marginRight: 'auto' }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View>
        <Text style={styles.price}>{props.price}</Text>
        <Icon style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {},
  title: {},
  description: {},
  price: {},
  icon: {},
});
