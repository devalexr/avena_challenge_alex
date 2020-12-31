//import liraries
import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {SafeAreaView} from 'react-native';

//=========== SCENES ===========
import InitView from '../../Views/Init/InitView';
import HomeView from '../../Views/Home/HomeView';
import Screen1View from '../../Views/Screens/Screen1View';
import Screen2View from '../../Views/Screens/Screen2View';
import Screen3View from '../../Views/Screens/Screen3View';
import Screen4View from '../../Views/Screens/Screen4View';

// create a component
export default class ROUTERMain extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Router>
          <Scene key="root">
            <Scene key="init_root" component={InitView} hideNavBar />
            <Scene key="home" component={HomeView} hideNavBar />
            <Scene key="screen_1" component={Screen1View} hideNavBar />
            <Scene key="screen_2" component={Screen2View} hideNavBar />
            <Scene key="screen_3" component={Screen3View} hideNavBar />
            <Scene key="screen_4" component={Screen4View} hideNavBar />
          </Scene>
        </Router>
      </SafeAreaView>
    );
  }
}
