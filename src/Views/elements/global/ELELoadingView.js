import React, {Component} from 'react';
import {View, ActivityIndicator } from 'react-native';
import {GUI_styles, GUI_colors} from '../../styles/StylesGlobal';

export default class ELELoadingView extends Component {
  render() {
    return (
      <View style={[GUI_styles.container, {flex:1}]}>
        <ActivityIndicator size="large" color={GUI_colors.COLOR_BLUE_LIGHT} />
      </View>
    );
  }
}
