import { StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home/HomeScreen.js';
import Time1 from './Times/Time1.js';
import Time2 from './Times/Time2.js';
import Time3 from './Times/Time3.js';
import Time4 from './Times/Time4.js';
import Time5 from './Times/Time5.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          title:'Criador de Times',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }} 
        />
        <Stack.Screen 
        name='Time1' 
        component={Time1}
        options={{
          title:'Time1',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }}
        />
        <Stack.Screen 
        name='Time2' 
        component={Time2}
        options={{
          title:'Time2',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }}
        />
        <Stack.Screen 
        name='Time3' 
        component={Time3}
        options={{
          title:'Time3',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }}
        />
        <Stack.Screen 
        name='Time4' 
        component={Time4}
        options={{
          title:'Time4',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }}
        />
        <Stack.Screen 
        name='Time5' 
        component={Time5}
        options={{
          title:'Time5',
          headerStyle:{
            backgroundColor:'#f07171',
          },
          headerTitleAlign:'center',
          headerTintColor:'white',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});