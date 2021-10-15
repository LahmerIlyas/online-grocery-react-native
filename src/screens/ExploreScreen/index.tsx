import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TextInput,FlatList } from 'react-native';
import { Icon } from '../../components';
import { ProductDetailCard } from './components/ProductCard';
import { data } from './data';

export const ExploreScreen: React.FC = () => {
  const renderCard = useCallback(({ item }) => {
    return <ProductDetailCard {...item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.searchInputContainer}>
          <Icon size={30} color={'#4C4F4D'} />
          <TextInput style={styles.searchTextInput} placeholder={'Search store'} />
        </View>
        <Icon size={30} color={'#4C4F4D'} />
      </View>
      <FlatList
        contentContainerStyle={{ paddingVertical: 25 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  searchInputContainer: {
    flexGrow: 1,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  searchIcon: {},
  searchTextInput: {
    marginLeft: 8,
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: 'GilroySemiBold',
  },
});
