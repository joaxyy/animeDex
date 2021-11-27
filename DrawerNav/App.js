import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Voting from './Voting';
import Welcome from './Welcome';
import Rank from './Top';
import AOT from './AOT';
import AOTChar from './AOTChar';
import Horimiya from './Horimiya';
import HoriChar from './HoriChar';
import Tokyo from './Tokyo';
import TokyoChar from './TokyoChar';



function NewsScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text style={{fontSize:30}}>
        This is the News Page
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

 function myDrawer () {
 return(
 <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="News" component={NewsScreen} />
    <Drawer.Screen name="Rank" component={Rank} />
    <Drawer.Screen name="Vote" component={Voting} />
  </Drawer.Navigator>
 );
 };

const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions ={{
          headerStyle: {
            backgroundColor: '#595959'

          },
          headerTintColor: 'black',
          
          headerTitle: '',
          headerLeftContainerStyle: {
             paddingLeft: 20,
          }
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
 
        />
        <Stack.Screen 
          name="Home" 
          component={myDrawer}
          options={{ headerShown: false }}
           />

        <Stack.Screen 
          name="AOT" 
          component={AOT}
           />

        <Stack.Screen 
          name="AOTChar" 
          component={AOTChar}
           />

         <Stack.Screen 
          name="Horimiya" 
          component={Horimiya}
           />

         <Stack.Screen 
          name="HoriChar" 
          component={HoriChar}
           />

          <Stack.Screen 
          name="Tokyo" 
          component={Tokyo}
           />    
           

           <Stack.Screen 
          name="TokyoChar" 
          component={TokyoChar}
           />    
           </Stack.Navigator>
    </NavigationContainer>
    );
};
  

export default MyStack