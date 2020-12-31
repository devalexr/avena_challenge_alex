/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import { Icon } from 'react-native-elements';
import ELEBottomNavigationMenu from '../elements/navigation/ELEBottomNavigationMenu';
import ELELikeButton from '../elements/screens/4/ELELikeButton';

export default class Screen4View extends Component {

  render() {
    return (
      <>
        <ELEBackButton />
        <ELELikeButton />
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
                borderBottomLeftRadius : 50,
                borderBottomRightRadius : 50,
              }}
              source={require('../../assets/img/screens/yogurt.png')}
            />
          </View>
          <View style={[GUI_styles.container, {}]}>
            <View style={{marginBottom:20}}>
              <Text style={[GUI_styles.textTitle, {textAlign:'center', marginBottom:20 }]}>Yogurt with fruits</Text>
              <Text style={[GUI_styles.textMicroMuted, {textAlign:'center'}]}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis.</Text>            
            </View>
            <View style={[{
              backgroundColor : 'white',
              padding: 20,
              borderRadius : 10,
              marginBottom : 20,
            }, GUI_styles.shadow]}>
              <Text style={[GUI_styles.text, {textAlign:'center', marginBottom:10 }]}>Nutritional information</Text>
              <View style={{
                flexDirection : 'row'
              }}>
                {this._nutritionalInformationItem('calorias', '243', true)}
                {this._nutritionalInformationItem('grasas', '2,8g', false)}
                {this._nutritionalInformationItem('carbohid', '45,7g', false)}
                {this._nutritionalInformationItem('proteinas', '9,8g', false)}
              </View>
            </View>

            <View style={[{
              backgroundColor : 'white',
              padding: 20,
              borderRadius : 10,
              marginBottom : 20,
            }, GUI_styles.shadow]}>
              <Text style={[GUI_styles.textStrong, {textAlign:'center', marginBottom:16 }]}>Ingredients</Text>
              <View style={{
                flexDirection : 'row'
              }}>
                {this._ingredientsItem('Kiwi', require('../../assets/img/screens/kiwi.png'))}
                {this._ingredientsItem('Yogurt', require('../../assets/img/screens/yogurt2.png'))}
                {this._ingredientsItem('Cherry', require('../../assets/img/screens/cherry.png'))}
                {this._ingredientsItem('Blueberry', require('../../assets/img/screens/blueberry.png'))}
              </View>
            </View>

            <View style={[{
              backgroundColor : 'white',
              padding: 20,
              borderRadius : 10,
              marginBottom : 20,
            }, GUI_styles.shadow]}>
              <Text style={[GUI_styles.textStrong, {textAlign:'center', marginBottom:16 }]}>Preparation</Text>
              <View style={{
                flexDirection : 'row'
              }}>
                <Text style={[GUI_styles.textMicroMuted, {textAlign:'center'}]}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis. s.</Text>
              </View>
            </View>

          </View>
        </ScrollView>
        <ELEBottomNavigationMenu />
      </>
    );
  }

  _nutritionalInformationItem(name, g, active = false)
  {
    return (
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        flex:1
      }}>
        <Text style={[GUI_styles.textStrong, {fontSize:20, color : active ? GUI_colors.COLOR_RED_LIGHT : GUI_colors.COLOR_FONT_STRONG}]}>{g}</Text>
        <Text style={GUI_styles.textMicroMuted}>{name}</Text>
      </View>
    )
  }

  _ingredientsItem(name, img)
  {
    return (
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        flex:1
      }}>
        <Image 
        style={{
          height:50,
          width:50,
          borderRadius:25,
          marginBottom:10
        }}
        source={img}
        />
        <Text style={GUI_styles.textMicro}>{name}</Text>
      </View>
    )
  }
}