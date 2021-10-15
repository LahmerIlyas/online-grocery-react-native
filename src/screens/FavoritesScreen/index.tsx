import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { data } from '../CartScreen/data';
import { FavoritesCard } from './components/FavoritesCard';

export const FavoritesScreen: React.FC = () => {
  const renderFavoritesCard = useCallback(({ item, index }) => {
    return <FavoritesCard {...item} key={String(index)} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList
        data={data}
        renderItem={renderFavoritesCard}
        contentContainerStyle={{ marginTop: 32 }}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add all to cart</Text>
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
    paddingVertical: 25,
    marginHorizontal: 25,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
    color: '#FCFCFC',
  },
});
