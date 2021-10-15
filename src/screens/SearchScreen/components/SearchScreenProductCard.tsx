import React from 'react';
import { View, Text, Image, ImageSourcePropType, StyleSheet, Pressable } from 'react-native';

export interface SearchScreenProductCardProps {
  image: ImageSourcePropType;
  title: string;
  backgroundColor: string;
  borderColor: string;
}
export const SearchScreenProductCard: React.FC<SearchScreenProductCardProps> = (props) => {
  return (
    <Pressable
      android_ripple={{ radius: 100 }}
      style={[
        styles.container,
        { backgroundColor: props.backgroundColor, borderColor: props.borderColor },
      ]}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    //marginHorizontal: 25,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 18,
    backgroundColor: '#53B1751A',
    borderWidth: 1,
    borderColor: 'rgba(83, 177, 117, 0.7)',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
  },
  title: {
    marginTop: 25,
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#181725',
  },
});
