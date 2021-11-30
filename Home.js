
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Linking, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator, ScrollView } from 'react-native';
import {Component} from 'react';

import { SliderBox } from "react-native-image-slider-box";

export default class Home extends Component{
    constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/opnews.png'),
        require('./assets/jjknews.png'),
        require('./assets/bcnews.png'),
      ]
    };
  }
  render() {
    return (
      
      <View style={styles.container}>
       <ScrollView style={{backgroundColor:'black'}}>
     

        <View style={styles.SubtitleA}>
            <Text style={styles.Subtitle1}>What's on trend?</Text>
            
        </View>
  
        <View style={styles.slidercontainer}>
          <SliderBox style={styles.slider}
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
             }
          />
      </View>

      <View style={styles.SubtitleB}>
            <Text style={styles.Subtitle1}>Anime Character of the Week! 
            <Text style={styles.Subtitle1b}> (Who wonder, you might find a gem through this character!)</Text></Text>
           

      <View style={styles.acCont}>
        <Image style={styles.acImg} source={require('./assets/kiyoko1.jpg')}/>        
        <Text style={styles.acInfoA}>
            <Text style={styles.acInfoB}>
            {"\n"}Name: Kiyoko Shimizu{"\n"}
              Anime Series: Haikyuu{"\n"}{"\n"}
            </Text>
    Kiyoko Shimizu is the head coach of the Karasuno High{"\n"} 
    volleyball team. She is described as highly attractive, {"\n"}
    attracting a lot of attention from both male and female  {"\n"}
    students, as well as other school teams. Karasuno High {"\n"} 
    is recognized as the team with the beautiful manager{"\n"} 
    because of her beauty.
    </Text>
    </View> 
  </View>

  <View style={styles.ttCont1}>   
        <Text style={styles.Subtitle1}>
            Top Trending Anime 
      
            <Text style={styles.acInfoA} onPress={ ()=> Linking.openURL('http://google.com') }>   Click To See More{" >>>"}</Text>
      
      </Text>  
      <View style={styles.ttCont2}> 
        <TouchableOpacity onPress={() =>Linking.openURL("#")}>
            <Image style={styles.ta1}source={require('./assets/aotTA.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>Linking.openURL("#")}>
            <Image style={styles.ta2}source={require('./assets/horimiyaTA.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>Linking.openURL("#")}>
            <Image style={styles.ta3}source={require('./assets/trTA.png')} />
        </TouchableOpacity>
      </View>
                  
</View>

<View
  style={{
    marginTop:30,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  }}
/>
    
    <View style={styles.voteCont}>
    <TouchableOpacity onPress={() =>Linking.openURL("#")}>
            <Image style={styles.voteImg}source={require('./assets/vote3.png')} />
        </TouchableOpacity>
      </View>
    
    

        <View style={styles.footer}>
        <Text style={styles.auTextA}>ABOUT US</Text>
        <Text style={styles.auTextB}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Welcome to AnimeDex, your number one source for all things about anime. {"\n"}
        We're dedicated to providing you the very best and latest information about the{"\n"}
        current top trending animes. {"\n"}{"\n"}
        
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Founded in 2021 by Antonio-Moran-Postrero-Valiente, AnimeDex come a{"\n"}
        long way from its beginnings. When the founders first started out, their passion {"\n"}
        for anime binge-watching drove them to start their own business. We hope you{"\n"}
        enjoy our content as much as we enjoy offering them to you.{"\n"}
      

        {"\n"}If you have any questions or comments, please don't hesitate to contact us at{"\n"}
        <Text style={styles.auSocial}>antoniomoranpostrerovaliente@email.com.</Text>
          </Text>
          
            <Image style={styles.footerImg}source={require('./assets/LOGO.png')} />
       
      </View>

    </ScrollView>
    </View> 
    
    
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'black',
   resizeMode:'cover',
   flex:1,
   justifyContent:'center',
   alignItems:'center'
  },
  


slidercontainer: {
    backgroundColor: 'black',
    position: 'relative',
    color: 'white',
    display:'flex',
  },

  slider:{
    height: 150,
    width:'93%',
    marginTop:10,
    alignSelf:'center'
  },
Subtitle1:{
  position:'relative',
  fontSize: 20,
  textAlign: 'center',
  fontWeight : 'bold' ,
  marginTop:20,
  marginLeft:5,
  marginBottom:5,
  color: '#e47334',
  textAlign: 'left'
},
Subtitle1b:{
  position:'relative',
  fontSize: 10,
  textAlign: 'center',
  fontWeight : 'normal' ,
  marginTop:5,
  marginLeft:5,
  color: 'white',
  textAlign: 'left'
},

acCont: {
  backgroundColor: 'black',
  display:'flex',
  color: 'white',
  flexWrap: "nowrap",
  flexDirection: 'row', 
  textAlign: 'left',
  marginTop:5,


},
acImg:{
  margin:10,
  width:'35%',
  height: 170,
  borderRadius:10,
  borderColor: "white",
},
acInfoA:{
  fontSize: 11,
  color:'white',
  borderColor:'white',
borderWidth:2,
borderRadius:5,
padding:5

},
acInfoB:{
  fontSize: 13,
  color:'white',
  fontWeight:'bold',
},
ttCont1:{
  backgroundColor: 'black',
  color: 'white'
},
ttCont2:{
  backgroundColor: 'black',
  display:'flex',
flexDirection:'row',
justifyContent:'space-around'
},

ta1:{
  width:150,
height:250,

},
ta2:{
  width:150,
height:250
},
ta3:{
   width:150,
height:250
},
voteCont:{
  backgroundColor:'black',
  justifyContent:'center',
  marginTop:30,
 marginBottom:25
  
},
voteImg:{
  width:'100%',
  height:150,
  alignSelf:'center',
  borderWidth:5,
  borderColor:'white',
   shadowColor: '#202020',
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 5,
},

auTextA:{
  fontWeight:'bold',
  fontSize:20,
  color:'black',
  alignSelf:'center'
},
auTextB:{
  fontSize:8,
  color:'black',
  
},
auSocial:{
  display:'flex',
  fontSize:8,
  color:'black',
  alignSelf:'center',
  justifyContent:'center',
  textAlign:'center'
},
footer:{
marginBottom:0,
backgroundColor: '#42e4d7',
bottom:-1,
height:200,
display:'flex',
flexDirection:'column',
justifyContent:'space-around',
alignItems:'center',
textAlign:'center'
},
footerImg:{
alignSelf:'center',
  height:50,
 width: '40%'
}

});