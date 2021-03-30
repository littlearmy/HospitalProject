import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../pages/splash'
import Login from '../pages/Login';
import Home from '../pages/home';
import Doctor from '../pages/doctor';
import Service from '../pages/service';
import detail_doctor from '../pages/doctor/detail.js';
import room from '../pages/room';
import search from '../pages/search';
import detail_room from '../pages/room/detail.js'

const Stack = createStackNavigator();

const headerTintColor = 'darkblue';

class MainNavigation extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SplashScreen}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="Dokter"
            component={Doctor}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="Service"
            component={Service}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="detail_doctor"
            component={detail_doctor}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="room"
            component={room}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="search"
            component={search}
          />
          <Stack.Screen
            options={{ headerTintColor, headerShown: false }}
            name="detail_room"
            component={detail_room}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainNavigation;
