import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { GUI_colors, GUI_styles } from '../../../styles/StylesGlobal';

export default class ELEFoodSlide extends Component {

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
        itemWidth={260}
        layout={'default'}
        renderItem={this._renderItem}
        firstItem={1}
        />
      </View>
    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={[{
      height: 350,
      margin: 5,
      }]}>
        <View style={[GUI_styles.shadow, {
          backgroundColor:GUI_colors.COLOR_GRAY_LIGHT, 
          width:254,
          borderRadius:20,
        }]}>
          <TouchableWithoutFeedback onPress={()=>{alert(item.title)}}>
            <Image 
            style={{
              width:'100%',
              height:300,
              borderRadius: 20,
            }}
            source={item.img}
            />
          </TouchableWithoutFeedback>
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
}