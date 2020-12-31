/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image } from 'react-native';
import {GUI_styles, GUI_colors} from '../styles/StylesGlobal';
import ELEBackButton from '../elements/navigation/ELEBackButton';
import ELEButtonSmall from '../elements/buttons/ELEButtonSmall';
import { Icon } from 'react-native-elements';

export default class Screen1View extends Component {

  render() {
    return(
      <>
        <View style={{
          flex:1,
        }}>
          <ELEBackButton />
          <Image 
          style={{
            width:'100%',
            height:'80%',
            marginTop:-60,
          }}
          source={require('../../assets/img/screens/tips.png')}  
          />

          <View style={[{
            backgroundColor:'white',
            width: '100%',
            borderTopLeftRadius:120,
            paddingVertical:40,
            marginTop:-50,
            flex:1,
            alignItems:'center',
            justifyContent:'center'
          }]}>
            <View style={{
              alignItems:'center',
              flexDirection:'row',
              marginBottom:10
            }}>
              {this.stepPoint(true)}
              {this.stepPoint(false)}
              {this.stepPoint(false)}
            </View>
            <View style={{
              padding:20
            }}>
              <Text style={[GUI_styles.textTitle, {textAlign:'center', marginBottom:20 }]}>best tips for your diet</Text>
              <Text style={[GUI_styles.textSmallMuted, {textAlign:'center'}]}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis. s.</Text>            
            </View>
          </View>
        </View>
        <View style={{
          paddingVertical:40,
          paddingHorizontal:20,
          backgroundColor:'white',
          flexDirection:'row'
        }}>
          <View style={{flex:1, marginRight:30}}>
            <ELEButtonSmall
            onPress={()=>{
              alert('Skip');
            }}
            active={false}
            title="Skip step"  
            />
          </View>

          <View style={{flex:1}}>
            <ELEButtonSmall
            onPress={()=>{
              alert('Next');
            }}
            active={true}
            title="Next"  
            />
          </View>
        </View>
      </>
    );
  }

  stepPoint(active)
  {
    return(
      <View style={{marginRight:10}}>
        <Icon
        size={14}
        type='font-awesome'
        name='circle'
        color={ active ? GUI_colors.COLOR_GREEN_STRONG : GUI_colors.COLOR_ICON}
        style={{
          marginRight : 10,
        }}
        />
      </View>
    )
  }
}