import React, {FC} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import theme from '@/utils/theme';
import HomeScreen from '@/screens/home';
import CartScreen from '@/screens/cart';
import DetailsScreen from '@/screens/details';
import {CartState} from '@/redux/models/cart';
import store, {RootState} from '@/redux/store';

const Tab = createBottomTabNavigator();
const TabStackScreen = () => {
  const {items} = useSelector<RootState, CartState>(({cart}) => cart);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarBadge: items?.length}}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App: FC = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  useFlipper(navigationRef);

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{orientation: 'portrait_up'}}>
              <Stack.Screen
                name="Root"
                component={TabStackScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
