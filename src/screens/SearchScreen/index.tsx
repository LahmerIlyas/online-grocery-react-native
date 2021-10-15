import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from '../../components';
import {
  SearchScreenProductCardProps,
  SearchScreenProductCard,
} from './components/SearchScreenProductCard';
import { products } from './data';

export const SearchScreen: React.FC = () => {
  const renderProductCard = React.useCallback(
    ({ item }: { item: SearchScreenProductCardProps }) => <SearchScreenProductCard {...item} />,
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Find Products</Text>
      <View style={styles.searchInputContainer}>
        <Icon size={30} color={'#4C4F4D'} />
        <TextInput style={styles.searchTextInput} placeholder={'Search store'} />
      </View>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ marginHorizontal: 25 }}
        data={products}
        renderItem={renderProductCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    color: '#181725',
    textAlign: 'center',
    marginTop: 56,
  },
  searchInputContainer: {
    marginHorizontal: 24,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 20,
  },
  searchIcon: {},
  searchTextInput: {
    flex: 1,
    marginLeft: 8,
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: 'GilroySemiBold',
  },
});
