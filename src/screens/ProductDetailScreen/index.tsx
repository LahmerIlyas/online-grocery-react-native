import React, { Fragment } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Icon, ParallaxScrollView } from '../../components';

export const ProductDetailScreen: React.FC = () => {
  return (
    <ParallaxScrollView
      minHeight={100}
      maxHeight={300}
      renderHeader={() => (
        <Image
          source={require('../../../assets/img/big-product-detail.png')}
          style={{ width: '100%', resizeMode: 'contain' }}
        />
      )}
      headerContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F3F2',
      }}
      renderFixedForeground={() => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Icon size={30} />
          <Icon size={30} />
        </View>
      )}
      minOverlayOpacity={0}
      maxOverlayOpacity={1}
      overlayColor={'red'}>
        <View style={}>
        <Text style={}>Naturel Red Apple</Text>
          <Icon size={30}/>
        </View>
        <Text>1kg, Price</Text>

        <View>
            <View>
                <Pressable>
                    <Icon size={25}/>
                    <Text>1</Text>
                    <Icon size={25}/>
                </Pressable>
            </View>
        <Text>$4.99</Text>
        </View>
        <View/>

    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
