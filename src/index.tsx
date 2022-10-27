import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import store from '@/redux/store';
import HomeScreen from '@/screens/home';

const Tab = createBottomTabNavigator();

const App: FC = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  useFlipper(navigationRef);

  return (
    <ReduxProvider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
