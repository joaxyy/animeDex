import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,FlatList,ScrollView, StatusBar,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function Top (props){

 return (

    

     <View style={styles.container}>
         <Text style={styles.titleText}> Top Trending Animes</Text>
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('AOT');  }}>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                <Text style={styles.rankText}>1 </Text>
                 </View>
                    <Text style={styles.animeText}>Attack On Titan</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('Horimiya');  }}>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>2 </Text>
                </View>
                    <Text style={styles.animeText}>Horimiya</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('Tokyo');  }}>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>3 </Text>
                </View>
                    <Text style={styles.animeText}>Tokyo Revengers</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('Demon');  }}>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>4 </Text>
                </View>
                    <Text style={styles.animeText}>Demon Slayer</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('Higehiro');  }}>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>5 </Text>
                </View>
                    <Text style={styles.animeText}>Higehiro</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>6 </Text>
                </View>
                <Text style={styles.animeText}>6th Anime</Text>
            </View>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>7 </Text>
                </View>
                <Text style={styles.animeText}>7th Anime</Text>
            </View>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>8 </Text>
                </View>
                <Text style={styles.animeText}>8th Anime</Text>
            </View>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>9 </Text>
                </View>
                <Text style={styles.animeText}>9th Anime</Text>
            </View>
            <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>10 </Text>
                </View>
                <Text style={styles.animeText}>10th Anime</Text>
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
    animeContainer:{
        backgroundColor: '#595959',
        width: '75%',
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    rankContainer:{
        backgroundColor: '#e47334',
        marginLeft: -25,
        marginTop: -30,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    rankText:{
        fontSize:70,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    titleText:{
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 20,
    },
    animeText:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 50,
        alignSelf: 'center',
    },
    animeText10:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 25,
        alignSelf: 'center',
    },
    scrollView: {
        flexGrow: 1,
      },
})
