/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {GUI_styles, GUI_colors} from '../styles/StylesGlobal';
import ELETop1 from '../elements/ui/ELETop1';

export default class HomeView extends Component {
  render() {
    return (
      <>
        <ELETop1 />
        <View style={[GUI_styles.container]}>
          <View
            style={[
              {
                backgroundColor: 'white',
                flexDirection: 'row',
                padding: 30,
                borderRadius: 10,
              },
              GUI_styles.shadow,
            ]}>
            <View
              style={{
                flex: 10,
              }}>
              <Text>Screen 1</Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}>
              <Text>></Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}
