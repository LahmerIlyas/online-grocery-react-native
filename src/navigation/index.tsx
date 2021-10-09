import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SplashScreen,
  OnBoardingScreen,
  SignInScreen,
  HomeScreen,
  ProductDetailScreen,
} from '../screens';
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AccountScreen" component={SplashScreen} />
      <Stack.Screen name="CartScreen" component={SplashScreen} />
      <Stack.Screen name="ExploreScreen" component={SplashScreen} />
      <Stack.Screen name="FavoritesScreen" component={SplashScreen} />
      <Stack.Screen name="OrderAcceptedScreen" component={SplashScreen} />
      <Stack.Screen name="SearchScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
}
export const MainApp: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
