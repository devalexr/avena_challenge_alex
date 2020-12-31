import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GUI_colors, GUI_styles, GUI_fuentes } from '../../styles/StylesGlobal';

export default class ELEButtonBig extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => {
        this.props.onPress();
      }} style={[
        {
          backgroundColor: GUI_colors.COLOR_BLUE_STRONG,
          paddingVertical:14,
          paddingHorizontal:20,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
          flex : 1,
          marginHorizontal:20
        },
        GUI_styles.shadow,
      ]}>
        <View>
          <Text style={[GUI_styles.textStrong, {color: 'white', fontSize:20}]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
