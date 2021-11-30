
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
    <View style={styles.container} >
    <View style={styles.container1}>
        <Image style={styles.image} source={require('./assets/icon.png')}/>
        <Image style={styles.image1} source={require('./assets/LogoA.png')}/>
        <Image style={styles.image2} source={require('./assets/back1.png')}/>
    </View>
      
    <View style={styles.container2}>
        <Text style={styles.charName}>{"\n"}{"\n"}Ran Haitani</Text> 
        <Image style={styles.charImage} source={require('./assets/ran.jpg')}/>
        <Text style={styles.charDetails}>Birthday:  1987{"\n"}
                                    Height:  unknown{"\n"}
                                    Weight:  unknown{"\n"}
                                    Gang:  Tenjiku's 4 Heavenly Kings (former){"\n"}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Rokuhara Tandai 2nd Seat{"\n"}
                                    Relatives:  Rindo Haitani (younger brother)</Text>

        <Text style={styles.charBackground}>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Following Tenjiku’s loss and Izana’s death, Ran Haitani along with
            the other S62 Generation were arrested and sent to Juvenile Detention
            Center for the second time in their lives (Chapter 185). After they were
            released, they were recruited by South and joined Rokuhara Tandai. Ran
            Haitani was a previous member of the Four Heavenly Kings of Tenjikun
            and now has the rank of 2nd Seat in Rokuhara Tandai (Chapter 212).
        </Text>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: { 
    backgroundColor: '#232423',
    height: '100%'
  },
  
  image:{
    display:'flex',
    justifyContent: 'space-around',
    position:'absolute',
    left:23,
    top:28,
    width:40,
    height:40
  },

  image1:{  
    position:'relative',
    top:21,
    width:120,
    height:120
  },
  
  image2:{
    display:'flex',
    justifyContent: 'space-around',
    position:'absolute',
    right:23,
    top:28,
    width:40,
    height:40
  },

  container1: { 
    height: '10%',
    width: '100%',
    backgroundColor: '#232423',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    paddingTop: -1,
    top:0,
  },

  container2: {
    height: '85%',
    width: '100%',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingBottom: 150
  },

  charName: {
    position:'relative',
    fontSize: 40,
    textAlign: 'center',
    fontWeight : 'bold' ,
    margin: 10,
    color: '#e47334',
  },

 charImage:{
  position:'relative',
  borderColor: 'black',
  borderWidth: 5,
  height:200,
  width:150,
  borderRadius:6,
 },

 charDetails: {
    position:'relative',
    padding:9,
    fontSize: 15,
    textAlign: 'left',
    fontWeight : 'bold' ,
    margin: 10,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:6,
    borderBottomWidth: 5,
    borderRightWidth: 5,
  },

charBackground:{
  position:'relative',
  fontSize: 14,
  textAlign: 'justify',
  fontWeight : 'normal' ,
  margin: 10,
  color: 'white',
  borderColor: 'black',
  borderWidth: 2,
  borderRadius:6,
  borderBottomWidth: 5,
  borderRightWidth: 5,
  padding:9

}

});
