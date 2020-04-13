import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayBlog from '../feature/containers/DisplayBlog';
import PostBlog from '../feature/containers/PostBlog';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DISPLAY" component={DisplayBlog} />
        <Stack.Screen name="POST" component={PostBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
