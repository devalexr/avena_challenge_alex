import React, {Component} from 'react';
import ELELoadingView from '../elements/global/ELELoadingView';
import {Actions} from 'react-native-router-flux';

export default class InitView extends Component {
  componentDidMount() {
    //simulate verify credentials
    setTimeout(() => {
      Actions.home();
    }, 1000);
  }

  render() {
    return <ELELoadingView />;
  }
}
