import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'


export default function AOT (props){
    return (
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.titleText}> ATTACK ON TITAN</Text>
            <Text style={styles.text}> Producer: Tetsuya Kinoshita {"\n"} Writer: Yasuko Kobayashi {"\n"} Directed by: Tetsurō Araki, Masashi Koizuka </Text>
            
            

                    <Image style={styles.photo} source={require('./assets/aot_bg.jpg')}/>

                <Text style={styles.subtext}>Synopsis</Text>
                <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisText}>The season follows Gabi Braun and Falco Grice, young Eldian Warrior candidates
                    seeking to inherit Reiner's Armored Titan four years after the failed mission to claim
                    the Founding Titan. Marley plans to invade Paradis to strengthen their weakening military
                    and recover the Founding Titan. With the Survey Corps on the Marley shoreline,
                    Gabi, Falco, Reiner, and other Titans go to war with the Paradis soldiers as Eren Jaeger
                    reveals his new plan of attack on the Marleyan invaders: annihilation. {"\n"}{"\n"}

                    As both sides take a heavy death toll, both the Marleyan Warriors and the Survey Corps
                    must question the best approach to claiming victory over the other side. Eren's comrades begin
                    to realize that he has begun to walk down a questionable path, while Gabi and Falco
                    must combat their internal tensions over the supposed "devils" of Paradis.  
                </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('AOTChar');  }}>
                <View style={styles.nextButton}>
                <Text style={styles.Text}>{">>"} SEE CHARACTERS PAGE</Text>
                </View>
                </TouchableOpacity>
           
       
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#808080',
    color: 'white',
  },

  photo: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
    synopsisContainer:{
    width: '75%',
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,


    },
    synopsisText:{
        fontSize: 18,
        textAlign: 'justify',
        margin: 10,
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
    textAlign: 'center',
    
  },
  titleText:{
      fontSize: 50,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'white',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      textAlign: 'center',
  },
  text:{
      fontSize:20,
      alignSelf: 'center',
      color: 'white',
      textAlign: 'center',
      margin: 10,
  },
  subtext:{
    fontSize:30,
    alignSelf: 'center',
    color: 'white',
}
})