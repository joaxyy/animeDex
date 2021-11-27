import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function Tokyo (props){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>3rd Anime: TOKYO REVENGERS</Text>
            <Text style={styles.text}> Producer: Shota Okada {"\n"} Writer: Ken Wakui {"\n"} Directed by: Tsutomu Hanabusa </Text>
            
            <ScrollView style={styles.container}>
                <View style={styles.animeContainer}>
                <Text style={styles.animeText}>ANIME SAMPLE IMAGE </Text>
                </View>
                <Text style={styles.subtext}>Synopsis</Text>
                <View style={styles.animeContainer}>
                <Text style={styles.animeText}>Takemichi Hanagaki's life is at an all-time low. Just when he thought it couldn't get worse,
he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji
Gang: a group of vicious criminals that has been disturbing society's peace for quite some time.{"\n"} {"\n"}

Wondering where it all went wrong, Takemichi suddenly finds himself traveling through time,
ending up 12 years in the past—when he was still in a relationship with Hinata. Realizing he
has a chance to save her, Takemichi resolves to infiltrate the Tokyo Manji Gang and climb the
ranks in order to rewrite the future and save Hinata from her tragic fate.
                </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('TokyoChar');  }}>
                <View style={styles.nextButton}>
                <Text style={styles.Text}>{">>"} SEE CHARACTERS PAGE</Text>
                </View>
                </TouchableOpacity>
            </ScrollView>
       
        </View>
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#808080',
    color: 'white',
  },
  animeContainer:{
      backgroundColor: 'white',
      width: '85%',
      padding: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
  },
  nextButton:{
    backgroundColor: 'white',
    width: '55%',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
},

  animeText:{
    fontSize: 30,
    
  },
  titleText:{
      fontSize: 50,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'white',
      margin: 20,
  },
  text:{
      fontSize:20,
      alignSelf: 'center',
      color: 'white',
  },
  subtext:{
    fontSize:30,
    alignSelf: 'center',
    color: 'white',
}
})