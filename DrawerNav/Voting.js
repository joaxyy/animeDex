import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default class Home extends Component{
    render(){
    return (
      <View style={styles.container}>

        <View style={styles.categoryContainer}>
          <Text style={styles.titleText}>CATEGORY NAME </Text>
        </View>

        <View style={styles.genreContainer}>
          <Text style={styles.titleText}>GENRE</Text>
        </View>

        <View style={styles.anime1Container}>
          <Text style={styles.titleText}>ANIME 1</Text>
        </View>

        <View style={styles.anime2Container}>
          <Text style={styles.titleText}>ANIME 2</Text>
        </View>

        <View style={styles.submitContainer}>
          <Text style={styles.titleText}>SUBMIT</Text>
        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        color: 'white',
    },

    categoryContainer: {
        position: 'relative',
        backgroundColor: '#d9d9d9',
        width: '75%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
        
        
        
    },

    genreContainer:{
        position: 'relative',
        backgroundColor: '#d9d9d9',
        width: '50%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        top: -10,
        
    },

    anime1Container:{
        position: 'relative',
        backgroundColor: '#d9d9d9',
        width: '50%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
    },
    
    anime2Container:{
        position: 'relative',
        backgroundColor: '#d9d9d9',
        width: '50%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
    },
    
    submitContainer:{
        position: 'relative',
        backgroundColor: '#d9d9d9',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 'auto',
    },

    textContainer:{
        fontSize:30
    }
});