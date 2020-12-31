/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { GUI_styles, GUI_colors } from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import ELEInput from '../elements/form/ELEInput';

export default class Screen2View extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password : '',
    }
  }

  render() {
    return (
      <>
        <ELEBackButton />
        <ScrollView>
          <Image
            style={{
              width: 417,
              height: 201,
              marginTop: -20,
              backgroundColor: 'white'
            }}
            source={require('../../assets/img/tops/top1.png')}
          />


          <View style={[GUI_styles.container, { 
            backgroundColor: 'white', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: 0,
            }]}>
            <View style={{
              marginBottom:30
            }}>
              <Text style={GUI_styles.textTitleBig}>Welcome</Text>
            </View>
            <View>
              <ELEInput
              name="email"
              component={this}
              placeholder="yourmail@mail.com"
              icon="envelope"
              />

              <ELEInput
              name="password"
              component={this}
              placeholder="password"
              secureTextEntry={true}
              icon="lock"
              />
            </View>

          </View>
          <Image
            style={{
              width: '100%',
              height: 198,
              backgroundColor: 'white',
              marginBottom: -50
            }}
            source={require('../../assets/img/tops/bottom.png')}
          />
        </ScrollView>
        
      </>
    );
  }

}