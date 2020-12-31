import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { GUI_styles } from '../../../styles/StylesGlobal';

export default class ELEFoodSlide extends Component {

  _renderItem = ({ item, index }) => {
    return (
      <View style={[{
      
      height: 350,
      margin: 5,
      }]}>
        <View style={GUI_styles.shadowImage}>
          <Image 
          style={[{
            width:'100%',
            height:300,
            borderRadius: 20,
          }, GUI_styles.shadowImage]}
          source={item.img}
          />
        </View>
        
        <View style={{
          height:50,
          padding:20,
          justifyContent: 'center', 
          alignItems:'center',
        }}>
          <Text style={[GUI_styles.textStrong, {textAlign:'center'}]}>{item.title}</Text>
        </View>
        
      
    </View>
    );
  }

  render() {

    return (
      <View style={{flex: 1,  justifyContent: 'center', alignItems:'center'}}>
        <Carousel
        ref={(c) => { this._carousel = c; }}
        data={[
          {
            title: 'Cereal',
            img : require('../../../../assets/img/screens/cereal.png')
          },
          {
            title: 'Yogurt with Fruits',
            img : require('../../../../assets/img/screens/yogurt.png')
          },
          {
            title: 'Banana Sandwich',
            img : require('../../../../assets/img/screens/sandwich.png')
          },
        ]}
        sliderWidth={360}
        itemWidth={256}
        layout={'default'}
        renderItem={this._renderItem}
        firstItem={1}
        />
      </View>
      
    );

  }
}