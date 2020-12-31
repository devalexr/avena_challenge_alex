/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import { Icon } from 'react-native-elements';
import ELEBottomNavigationMenu from '../elements/navigation/ELEBottomNavigationMenu';

export default class Screen4View extends Component {

  render() {
    return (
      <>
        <ELEBackButton />
        <ScrollView style={{ backgroundColor: GUI_colors.COLOR_GRAY_LIGHT }}>
          <Image
            style={{
              width: 425,
              height: 137,
              marginTop: -20,
              zIndex: 2,
            }}
            source={require('../../assets/img/tops/top2.png')}
          />
          <View style={{
            marginTop: -220,
            zIndex: 1,
          }}>
            <Image
              style={{
                width: '100%',
                height: 500,
               
              }}
              source={require('../../assets/img/screens/yogurt.png')}
            />
          </View>
          <View style={[GUI_styles.container, {}]}>
           
          </View>
        </ScrollView>
        <ELEBottomNavigationMenu />
      </>
    );
  }
}