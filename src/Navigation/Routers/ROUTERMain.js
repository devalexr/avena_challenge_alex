//import liraries
import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {SafeAreaView} from 'react-native';

//=========== SCENES ===========
import InitView from '../../Views/Init/InitView';
import HomeView from '../../Views/Home/HomeView';

// create a component
export default class ROUTERMain extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Router>
          <Scene key="root">
            <Scene key="init_root" component={InitView} hideNavBar />
            <Scene key="home" component={HomeView} hideNavBar />
          </Scene>
        </Router>
      </SafeAreaView>
    );
  }
}
