import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { APP_CONSTANTS } from '../constants';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={APP_CONSTANTS.SCREEN_NAMES.HOME}
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name={APP_CONSTANTS.SCREEN_NAMES.HOME} 
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
