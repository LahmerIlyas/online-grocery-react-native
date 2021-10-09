import React from 'react';
import { View, StyleSheet, Pressable, Text, TextInput } from 'react-native';
import ColoredCarrot from '../../../assets/svg/colored-carrot';
import { Icon } from '../../components';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ColoredCarrot style={styles.coloredCarrot} />
      <View style={styles.locationContainer}>
        <Icon size={30} color={'#4C4F4D'} />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <Icon size={30} color={'#4C4F4D'} />
        <TextInput style={styles.searchTextInput} placeholder={'Search store'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    marginTop: 20
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
