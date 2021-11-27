import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function HorimiyaChar (props){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Tokyo Revengers {"\n"} &nbsp; &nbsp; Characters</Text>
            
            <ScrollView style={styles.container}>
                
                <View style={styles.animeCharContainer}>
                    
                    
                    <View style={styles.animeCharPic}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Welcome');  }}>
                            <Text style={styles.text}>Anime Character Photo</Text>
                        </TouchableOpacity>
                    </View>
                   
                     
                    <View style={styles.animeCharPic}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Welcome');  }}>
                            <Text style={styles.text}>Anime Character Photo</Text>
                            </TouchableOpacity>
                    </View>
                   
                </View>

                <View style={styles.animeCharContainer}>
                    <View style={styles.animeCharPic}>
                        <Text style={styles.text}>Anime Character Photo</Text>
                    </View>
                     
                    <View style={styles.animeCharPic}>
                        <Text style={styles.text}>Anime Character Photo</Text>
                    </View>
                    
                </View>

                <View style={styles.animeCharContainer}>
                    <View style={styles.animeCharPic}>
                        <Text style={styles.text}>Anime Character Photo</Text>
                    </View>
                     
                    <View style={styles.animeCharPic}>
                        <Text style={styles.text}>Anime Character Photo</Text>
                    </View>
                    
                </View>
                
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
      animeCharContainer:{
         flexDirection: 'row',
         maxWidth: '100%'
        


    },
      animeCharPic:{
        backgroundColor: 'white',
        width: '40%',
        padding: 30,
        alignSelf: 'center',
        alignItems: 'center',
        margin: 20,
    },
      titleText:{
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        margin: 20,
        justifyContent: 'center',
    },
    text:{
        fontSize:20,
        alignSelf: 'center',
        color: 'black',
    },
})