import React, {FC} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {QueryClient, QueryClientProvider} from 'react-query';
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

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();
const TabStackScreen = () => {
  const {items} = useSelector<RootState, CartState>(({cart}) => cart);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          ...(Object.keys(items)?.length > 0 && {
            tabBarBadge: Object.keys(items)?.length,
          }),
        }}
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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
