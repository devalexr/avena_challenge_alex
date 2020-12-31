/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class HomeView extends Component {

  render() {
    return (
      <>
        <ScrollView style={{ backgroundColor: GUI_colors.COLOR_GRAY_LIGHT }}>
          <Image
          style={{
            width: 417,
            height: 201,
            marginTop:-20
          }}
          source={require('../../assets/img/tops/top1.png')}
          />
          <View style={[GUI_styles.container, { marginTop: -30 }]}>
            <Text style={GUI_styles.textTitleBig}>Avena Challenge</Text>
            <Text style={[GUI_styles.textPMuted, { marginBottom: 30 }]}>Selecciona del menú la pantalla a visualizar</Text>
            {this.menuElement('Screen 1', 'Los mejores tips para tu dieta.', () => { Actions.screen_1(); })}
            {this.menuElement('Screen 2', '¡Bienvenido! (Pantalla de Login)', () => { })}
            {this.menuElement('Screen 3', 'Explora el menú.', () => { Actions.screen_3(); })}
            {this.menuElement('Screen 4', 'Detalles del platillo.', () => { })}
          </View>
        </ScrollView>
      </>
    );
  }

  menuElement(title, description, onPress) {
    return (
        <TouchableOpacity onPress={() => {
          onPress();
        }}
        style={[
          {
            backgroundColor: 'white',
            padding: 30,
            borderRadius: 10,
            width: '100%',
            height: 90,
            marginBottom: 10
          },
          GUI_styles.shadow,
        ]}>
          <View style={{flexDirection:'row'}}>
            <View
              style={{
                flex: 10,
              }}>
              <Text style={GUI_styles.textStrong}>{title}</Text>
              <Text style={GUI_styles.textSmallMuted}>{description}</Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="angle-right"
                type='font-awesome'
                size={30}
                color={GUI_colors.COLOR_GREEN_STRONG}
              />
            </View>
          </View>
      </TouchableOpacity>
    );
  }
}
