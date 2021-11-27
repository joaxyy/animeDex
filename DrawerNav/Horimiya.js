import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'


export default function Horimiya (props){
    return (
        <ScrollView style={styles.container}>
        <View style={styles.container}>
             <Text style={styles.titleText}>Horimiya</Text>
            <Text style={styles.text}> Producer: Taito Itō {"\n"} Writer: ＨＥＲＯ {"\n"} Directed by: Masashi Ishihama </Text>
            
            

                <Image style={styles.photo} source={require('./assets/horimiyabg.jpg')}/>

                <Text style={styles.subtext}>Synopsis</Text>
                <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisText}>On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a
perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting
between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due
to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him
Having opposite personalities yet sharing odd similarities, the two quickly become friends and often spend time together in Hori's home.
they both emerge from their shells, they share with each other a side of themselves concealed from the outside world.
                </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('HoriChar');  }}>
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
      width: 550,
      height: 400,
      resizeMode: 'contain',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
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