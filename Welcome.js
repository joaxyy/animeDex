import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

import Home from './Home';



export default function Welcome(props) {
  
  const { onPress, title = 'Continue To AnimeDex' } = props;
  function touch(){
    
     props.navigation.navigate('Home');
    
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Image source={require('./assets/LOGO.png')}/>
      </View>
      <View style={styles.container2}>
      <Text style={styles.setFontSize}>GREETINGS AND WELCOME TO ANIMEDEX!{"\n"}DISCOVER Anime
      that will captivate you. </Text> 
      <Text style={styles.setFontSize} >KEEP ABREAST of what's new and happening in this realm. {"\n"}
      {"\n"}CAST YOUR VOTE for your favorite Anime film!{"\n"}</Text> 
        <TouchableOpacity style={styles.button} onPress={() => {
              
                touch();
                
                
              }}>
          <Text style={styles.setColorforButton}>{title}</Text>
         </TouchableOpacity>
         
      <StatusBar style="auto" />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  container1: {
    
    height: '45%',
    width: '100%',
    backgroundColor: '#42e4d7',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingTop: 75,
  },
  container2: {
    height: '75%',
    width: '100%',
    backgroundColor: '#e47334',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingBottom: 150
  },
  setFontSize: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight : 'bold' ,
    margin: 10,
    color: 'black'
  },
  setColorforButton: {
    color:'black'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    elevation: 3,
    backgroundColor: '#42e4d7',
  },
});
