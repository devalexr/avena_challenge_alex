import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GUI_colors, GUI_styles } from '../../../styles/StylesGlobal';

import { Icon } from 'react-native-elements';

export default class ELELikeButton extends Component {

  render() {
    return (
      <View style={[{
        position: 'absolute',
        top: 120,
        right: 30,
        zIndex: 1,
        backgroundColor:'white',
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
      }, GUI_styles.shadow]}>
        <TouchableOpacity
          onPress={() => {
            alert('liked')
          }}>
          <Icon
          size={22}
          type='font-awesome'
          name='heart'
          color={GUI_colors.COLOR_RED_STRONG}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
