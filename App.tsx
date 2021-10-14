/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainApp } from './src/navigation';
import { AlertProvider } from './src/api';

// Define all your fonts below
const customFonts = {
  GilroyExtraBold: require('./assets/fonts/Gilroy-ExtraBold.ttf'),
  'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
  GilroyRegular: require('./assets/fonts/Gilroy-Regular.ttf'),
  GilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
  GilroyMedium: require('./assets/fonts/Gilroy-Medium.ttf'),
  GilroyLight: require('./assets/fonts/Gilroy-Light.ttf'),
};
export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    Font.loadAsync(customFonts)
      .then(() => setLoaded(true))
      .catch((e) => console.log(JSON.stringify(e)));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!loaded && <Text>Loading Assets</Text>}
      {loaded && (
        <Fragment>
          <AlertProvider>
            <MainApp />
          </AlertProvider>
        </Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
