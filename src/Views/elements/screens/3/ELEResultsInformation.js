import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { GUI_colors, GUI_styles } from '../../../styles/StylesGlobal';
import {Actions} from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

export default class ELEResultsInformation extends Component {

  render() {
    return (
      <ScrollView   
        horizontal={true}
        style={{
          marginVertical:10, 
        }}
      >
        {this.informationItem('Results of the week', '-4kg', '520')}
        {this.informationItem('You Information', '-24kg', '4,360')}
      </ScrollView >
    );
  }

  informationItem(title, lost, kcal)
  {
    return(
      <View style={{backgroundColor:GUI_colors.COLOR_GRAY_LIGHT, paddingBottom:6}}>
        <View style={[GUI_styles.shadow, {
          backgroundColor:'white',
          width:250,
          padding:10,
          borderRadius:10,
          margin:10,
          marginLeft:4,
      
        }]}>
          <View style={{flexDirection:'row',}}>
            <View style={{
              marginRight : 10
            }}>
              <View>
                <Text style={GUI_styles.textStrong}>{title}</Text>
              </View>
              <View style={{
                flexDirection : 'row',
                marginVertical:10
              }}>
                <View style={{
                  marginRight:12
                }}>
                  <Text style={GUI_styles.textMicroMuted}>you have lost</Text>
                  <Text style={[GUI_styles.textStrong, {color:GUI_colors.COLOR_GREEN_STRONG}]}>{lost}</Text>
                </View>
                <View style={{
                  marginRight:12
                }}>
                  <Text style={GUI_styles.textMicroMuted}>your level up</Text>
                  <Text style={[GUI_styles.textStrong, {color:GUI_colors.COLOR_GREEN_STRONG}]}>Level 8</Text>
                </View>
              </View>
            </View>
            <View style={{
              alignItems:'center',
              justifyContent:'center',
            }}>
              <View style={{
                height:60,
                width:60,
                borderRadius:30,
                borderWidth:4,
                borderColor : GUI_colors.COLOR_GREEN_STRONG,
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Text style={[GUI_styles.textStrong, {fontSize:11}]}>{kcal}</Text>
                <Text style={[GUI_styles.textStrong, {fontSize:11}]}>Kcal</Text>
              </View>
            </View>

          </View>
          <View style={{marginTop:8, marginBottom:-10}}>
            <Text style={[GUI_styles.textMicro, {textAlign:'center'}]}>Never give up, 
              <Text onPress={()=>{alert('know more')}} style={{color:GUI_colors.COLOR_GREEN_STRONG}}> know more</Text>
            </Text>
          </View>
          <View>
            <View style={[{
              backgroundColor:'white',
              height:40,
              width:40,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:20,
              marginBottom:-20,
              marginLeft:-10,
            }, GUI_styles.shadow]}>
              <TouchableOpacity
                onPress={() => {
                  alert(title)
                }}>
                <Icon
                size={14}
                type='font-awesome'
                name='arrow-right'
                color={GUI_colors.COLOR_FONT_DEFAULT}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
