/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {GUI_styles, GUI_colors} from '../styles/StylesGlobal';
import ELETop1 from '../elements/ui/ELETop1';
import { Icon } from 'react-native-elements';

export default class HomeView extends Component {

  

  render() {
    return (
      <>
        <ELETop1 />
        <ScrollView style={{backgroundColor:GUI_colors.COLOR_GRAY_LIGHT}}>
          <View style={[GUI_styles.container, {marginTop:-20}]}>
              <Text style={GUI_styles.textTitleBig}>Avena Challenge</Text>
              <Text style={[GUI_styles.textPMuted, {marginBottom:30}]}>Selecciona del menú la pantalla a visualizar</Text>
              {this.menuElement('Screen 1', 'Los mejores tips para tu dieta.', ()=>{})}
              {this.menuElement('Screen 2', '¡Bienvenido! (Pantalla de Login)', ()=>{})}
              {this.menuElement('Screen 3', 'Selecciona tu comida.', ()=>{})}
              {this.menuElement('Screen 4', 'Select your food', ()=>{})}
          </View>
        </ScrollView>
      </>
    );
  }

  menuElement(title, description, onPress) {
    return(
      <View
        style={[
          {
            backgroundColor: 'white',
            padding: 30,
            borderRadius: 10,
            width:'100%',
            height: 90,
            marginBottom:10
          },
          GUI_styles.shadow,
        ]}>
        <TouchableOpacity style={{ flexDirection: 'row',}}  onPress={()=>{
          onPress();
        }}>
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
        </TouchableOpacity>
      </View>
    );
  }
}
