import React, {Component} from 'react';
import {View} from 'react-native';
import {GUI_colors} from '../../styles/StylesGlobal';
import SvgUri from 'react-native-svg-uri';

export default class ELETop1 extends Component {
  render() {
    return (
      <View style={{backgroundColor: GUI_colors.COLOR_GRAY_LIGHT}}>
        <SvgUri
          width="100%"
          height="160"
          source={require('../../../assets/svg/top1.svg')}
        />
      </View>
    );
  }
}
