import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GUI_colors, GUI_styles } from '../../styles/StylesGlobal';
import {Actions} from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

export default class ELEBackButton extends Component {

  render() {
    return (
      <View style={[{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        backgroundColor:'white',
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
      }, GUI_styles.shadow]}>
        <TouchableOpacity
          onPress={() => {
            Actions.pop();
          }}>
          <Icon
          size={30}
          type='material'
          name='arrow-back'
          color={GUI_colors.COLOR_FONT_DEFAULT}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
