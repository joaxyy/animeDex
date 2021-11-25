import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';


function NewsScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text style={{fontSize:30}}>
        This is the News Page
      </Text>
    </View>
  );
}

function RankingScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text style={{fontSize:30}}>
        This is the Ranking Page
      </Text>
    </View>
  );
}

function VoteScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text style={{fontSize:30}}>
        This is the Voting Page
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Rank" component={RankingScreen} />
        <Drawer.Screen name="Vote" component={VoteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}