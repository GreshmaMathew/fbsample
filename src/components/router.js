// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Blogs from '../components/blogs';

import Post from '../components/post';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BLOGS" component={Blogs} />
        <Stack.Screen name="POST" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
