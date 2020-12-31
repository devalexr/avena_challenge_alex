/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { GUI_styles, GUI_colors, GUI_fuentes } from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import ELEInput from '../elements/form/ELEInput';
import ELEButtonBig from '../elements/buttons/ELEButtonBig';

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
        <ScrollView style={{
          backgroundColor: 'white'
        }}>
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
              marginBottom:30,
              marginTop:-30,
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
          <View style={{
            marginBottom:20
          }}>
            <Text style={GUI_styles.textPMuted} onPress={()=>{alert('recover password')}}>Forgot you password?</Text>
          </View>
          <View style={{
            marginBottom:20
          }}>
            <ELEButtonBig 
            title="Login"
            onPress={()=>{
              alert('Login => email: ' + this.state.email + ' password: ' + this.state.password)
            }}
            />
          </View>
          <View style={{
            marginBottom:30
          }}>
            <Text style={GUI_styles.textPMuted} onPress={()=>{alert('recover password')}}>Don't have an account? <Text style={{fontFamily:GUI_fuentes.FONT_BOLD}}>sign up</Text></Text>
          </View>
          <View style={{
            flexDirection : 'row',
            paddingHorizontal: 40,
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
            {this._loginMethodButton('facebook', require('../../assets/img/social/facebook.png') , 12)}
            {this._loginMethodButton('google', require('../../assets/img/social/google.png'), 24)}
          </View>
          <Image
            style={{
              width: '100%',
              height: 198,
              backgroundColor: 'white',
            }}
            source={require('../../assets/img/tops/bottom.png')}
          />
        </ScrollView>
        
      </>
    );
  }

  _loginMethodButton(type, img, width)
  {
    return(
        <TouchableOpacity 
        style={[{
          marginRight : 40,
          height:50,
          width:70,
          borderRadius:10,
          backgroundColor:'white',
          justifyContent: 'center', 
        alignItems: 'center',
        }, GUI_styles.shadow]}
        onPress={()=>{
          alert('login ' + type)
        }}
        >
          <Image 
          style={{
            width: width,
            height: 24,
          }}
          source={img}
          />
        </TouchableOpacity>
    );
  }

}