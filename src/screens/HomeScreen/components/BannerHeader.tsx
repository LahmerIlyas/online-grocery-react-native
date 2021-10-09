import React, { useCallback } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const BannerHeader: React.FC = () => {
  const renderItem = useCallback(({ item, index }) => {
    return (
      <Image source={require('../../../../assets/img/banner.png')} style={styles.image}></Image>
    );
  }, []);

  return (
    <Carousel
      containerCustomStyle={{ marginTop: 20 }}
      data={[{}, {}]}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width - 40}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get('screen').width - 40,
    resizeMode: 'contain',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
