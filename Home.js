
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default class Home extends Component{
    render(){
    return (
      <View style={styles.container}>
        <View style={styles.newsContainer}>
          <Text style={styles.titleText}>NEWS AND UPDATE</Text>
        </View>
        <View style={styles.topAnimeContainer}>
          <Text style={styles.titleText}>CURRENT TOP ANIME</Text>
        </View>
        <View style={styles.votingPageContainer}>
          <Text style={styles.titleText}>LINK TO VOTING PAGE</Text>
        </View>
        <View style={styles.aboutUsContainer}>
          <Text style={styles.titleText}>About Us</Text>
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
      justifyContent: 'center',
      color: 'white',
    },

    newsContainer: {
      position: 'relative',
      marginTop: -40,
      width: '100%',
      height: '40%',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topAnimeContainer: {
      position: 'relative',
      marginTop: 20,
      marginLeft: -80,
      width: '75%',
      height: '15%',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    votingPageContainer: {
      position: 'relative',
      marginTop: 20,
      marginLeft: -80,
      width: '75%',
      height: '12%',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    aboutUsContainer: {
      position: 'relative',
      marginTop: 50,
      width: '75%',
      height: '10%',
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    titleText: {
      fontSize: 30,
  
    }

    
  });