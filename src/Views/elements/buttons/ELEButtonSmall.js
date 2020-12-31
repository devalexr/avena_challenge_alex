import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GUI_colors, GUI_styles, GUI_fuentes } from '../../styles/StylesGlobal';

export default class ELEButtonSmall extends Component {

  render() {

    return (

      <TouchableOpacity onPress={() => {
        this.props.onPress();
      }} style={[
        {
          backgroundColor: this.props.active ? GUI_colors.COLOR_GREEN_STRONG : 'white',
          paddingVertical:14,
          paddingHorizontal:20,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:8,
        },
        GUI_styles.shadow,
      ]}>
        <View>
          <Text style={[GUI_styles.text, {color: this.props.active  ? 'white' : GUI_colors.COLOR_FONT_MUTED}]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
