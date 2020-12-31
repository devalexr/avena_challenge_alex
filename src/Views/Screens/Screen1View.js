/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import {GUI_styles, GUI_colors} from '../styles/StylesGlobal';

export default class Screen1View extends Component {

  render() {
    return(
      <>
        <View style={{
          flex:1,
        }}>
          <Image 
          style={{
            width:'100%',
            height:'80%',
            marginTop:-60,
          }}
          source={require('../../assets/img/screens/tips.png')}  
          />

          <View style={[{
            backgroundColor:'white',
            width: '100%',
            borderTopLeftRadius:120,
            paddingVertical:40,
            marginTop:-100,
            flex:1,
            alignItems:'center',
            justifyContent:'center'
          }, GUI_styles.shadow]}>
            <View style={{
              padding:20
            }}>
              <Text style={[GUI_styles.textTitle, {textAlign:'center', marginBottom:20 }]}>best tips for your diet</Text>
              <Text style={[GUI_styles.textSmallMuted, {textAlign:'center'}]}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis. s.</Text>            
            </View>
          </View>
        </View>
        <View style={{
          padding:40,
          backgroundColor:'red'
        }}>

        </View>
      </>
    );
  }
}