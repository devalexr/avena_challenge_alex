/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class HomeView extends Component {

  render() {
    return (
      <>
        <ScrollView style={{ backgroundColor: GUI_colors.COLOR_GRAY_LIGHT }}>
            <Image
            style={{
              width: 425,
              height:137,
              marginTop:-20
            }}
            source={require('../../assets/img/tops/top2.png')}
          />
          <View style={[GUI_styles.container, {  }]}>
           
          </View>
        </ScrollView>
      </>
    );
  }
  }