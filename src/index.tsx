import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import theme from '@/utils/theme';
import store from '@/redux/store';
import HomeScreen from '@/screens/home';

const Tab = createBottomTabNavigator();

const App: FC = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  useFlipper(navigationRef);

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
