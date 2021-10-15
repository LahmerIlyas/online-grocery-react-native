import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SplashScreen,
  OnBoardingScreen,
  SignInScreen,
  HomeScreen,
  ProductDetailScreen,
  SearchScreen,
  ExploreScreen,
  OrderAcceptedScreen,
  CartScreen,
} from '../screens';
import { Icon } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator screenOptions={{ header: () => null }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="shop" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Icon name="explore" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => <Icon name="cart" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={SplashScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <Icon name="favorites" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={SplashScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabBar} />
      <Stack.Screen name="OrderAcceptedScreen" component={OrderAcceptedScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
