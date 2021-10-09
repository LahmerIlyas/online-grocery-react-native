import React from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import ColoredCarrot from '../../../assets/svg/colored-carrot';
import { Icon } from '../../components';
import { BannerHeader } from './components/BannerHeader';
import { ProductDetailCard } from './components/ProductCard';
import { exclusiveOffers, bestSelling, groceries } from './data';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ColoredCarrot style={styles.coloredCarrot} />
      <View style={styles.locationContainer}>
        <Icon size={30} color={'#4C4F4D'} />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <Icon size={30} color={'#4C4F4D'} />
        <TextInput style={styles.searchTextInput} placeholder={'Search store'} />
      </View>
      <BannerHeader />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <Text style={styles.sectionExpand}>See all</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 25, marginTop: 18 }}>
        <ProductDetailCard {...exclusiveOffers[0]} />
        <View style={{ width: 15 }} />
        <ProductDetailCard {...exclusiveOffers[1]} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Best Selling</Text>
        <Text style={styles.sectionExpand}>See all</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 25, marginTop: 18 }}>
        <ProductDetailCard {...bestSelling[0]} />
        <View style={{ width: 15 }} />
        <ProductDetailCard {...bestSelling[1]} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <Text style={styles.sectionExpand}>See all</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 25, marginTop: 18 }}>
        <ProductDetailCard {...groceries[0]} />
        <View style={{ width: 15 }} />
        <ProductDetailCard {...groceries[1]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 25
  },
  coloredCarrot: {
    alignSelf: 'center',
    marginTop: 56,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  locationText: {
    color: '#4C4F4D',
    marginLeft: 8,
    fontSize: 18,
    fontFamily: 'GilroyMedium',
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
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 30,
  },
  sectionTitle: {
    color: '#181725',
    fontSize: 24,
    fontFamily: 'GilroySemiBold',
  },
  sectionExpand: {
    color: '#53B175',
    fontSize: 16,
    fontFamily: 'GilroySemiBold',
  },
});
