import React, {Component} from 'react';
import {View, ActivityIndicator } from 'react-native';
import {GUI_styles, GUI_colors} from '../../styles/StylesGlobal';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default class ELEInput extends Component {
  render() {

    const name = this.props.name;
    const placeholder = this.props.placeholder;
    const maxLength = this.props.maxLength;
    const icon = this.props.icon;
    const secureTextEntry = this.props.secureTextEntry;

    return (
      <>
        <Input
        ref={name}
        onChangeText={(value) => {
          this.props.component.setState({
            [name] : value,
          });
        }} 
        value={this.props.component.state[name]}
        placeholder={placeholder}
        inputStyle={[GUI_styles.formInput, {height: 60}]}
        inputContainerStyle={GUI_styles.formInputContainer}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        rightIconContainerStyle={{
          backgroundColor:'white',
          height: 60,
          padding: 10,
          marginLeft:-20,
          borderRadius:5,
        }}
        rightIcon={
          (icon) &&
            <Icon
            style={{
              backgroundColor:'red'
            }}
            type="font-awesome"
            name={(!this.props.component.state[name]) ? icon : 'check-circle'}
            size={24}
            color={ (!this.props.component.state[name]) ? GUI_colors.COLOR_ICON : GUI_colors.COLOR_GREEN_STRONG}
            />
        }
        />
      </>
    );
  }
}
