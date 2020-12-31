/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import ELEBackButton from '../elements/navigation/ELEBackButton';

export default class Screen2View extends Component {

  render() {
    return (
      <>
        <ELEBackButton />
        <Image
        style={{
          width: 417,
          height: 201,
          marginTop:-20,
          backgroundColor:'white'
        }}
        source={require('../../assets/img/tops/top1.png')}
        />

         
          <View style={[GUI_styles.container, { backgroundColor:'white', justifyContent:'center', alignItems:'center' }]}>
            <Text style={GUI_styles.textTitleBig}>Welcome</Text>
            

          </View>
          <Image
          style={{
            width: '100%',
            height: 198,
            backgroundColor:'white',
            marginBottom:-50
          }}
          source={require('../../assets/img/tops/bottom.png')}
          />
      </>
    );
  }

}