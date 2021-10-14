import React from 'react';
import { View, Text } from 'react-native';

export const Card: React.FC = () => {
  return (<View style={styles.container}>

  </View>);
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    backgroundColor: '#53B1751A',
    shadowColor: 'rgba(0, 0, 0, 0.0)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
    borderStyle: solid,
    borderWidth: 1,
    borderColor: 'rgba(83, 177, 117, 0.7)',
  },

});
