import { StyleSheet } from 'react-native';
import Login from './src/Pages/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/Pages/Cadastro';
import Home from './src/Pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
