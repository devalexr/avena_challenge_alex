import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { GUI_colors, GUI_styles } from '../../styles/StylesGlobal';
import { Icon } from 'react-native-elements';

export default class ELEBottomNavigationMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItemSelected: 'Home',
    }
  }

  render() {
    return (
      <View style={[{
        flexDirection : 'row',
        backgroundColor : 'white',
        padding: 14,
      }, GUI_styles.shadow]}> 
        {this._menuItem('Home', 'home', this.state.menuItemSelected == 'Home')}
        {this._menuItem('Profile', 'user-circle', this.state.menuItemSelected == 'Profile')}
        {this._menuItem('Awards', 'trophy', this.state.menuItemSelected == 'Awards')}
        {this._menuItem('Config', 'cog', this.state.menuItemSelected == 'Config')}
      </View>
    );
  }

  _menuItem(name, icon, active)
  {
    return (
      <TouchableOpacity 
      onPress={()=>{
        this.setState({
          menuItemSelected : name,
        })
      }}
      style={{
        flex : active ? 2 : 1,
        backgroundColor : active ? GUI_colors.COLOR_GREEN_STRONG : 'white',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:20,
        height:30
      }} 
      >
        {(active)?

          <View style={{
            flexDirection : 'row',
            justifyContent:'center',
            alignItems:'center',
          }}>
            <Icon
            size={24}
            type='font-awesome'
            name={icon}
            color="white"
            />
            <View style={{
              marginLeft:10
            }}>
              <Text style={[GUI_styles.textStrong, {color:'white', fontSize:14}]}>{name}</Text>
            </View>
            
          </View>

          :
          <Icon
          size={24}
          type='font-awesome'
          name={icon}
          color={GUI_colors.COLOR_ICON}
          />
        }
       
      </TouchableOpacity>
    );
  }
}