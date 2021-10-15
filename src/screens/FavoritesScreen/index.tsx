import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { data } from '../CartScreen/data';
import { FavoritesCard } from './components/FavoritesCard';

export const FavoritesScreen: React.FC = () => {
  const renderFavoritesCard = useCallback(({ item }) => {
    return <FavoritesCard {...item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList data={data} renderItem={renderFavoritesCard} />
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
});
