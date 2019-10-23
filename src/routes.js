import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

//Redux
import {connect} from 'react-redux';

// Drawer
import Drawer from './components/Drawer';

// Screen Initial
import SplashScreen from './screens/Splashscreen';
import Welcome from './screens/Main';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" modal>
          <Scene
            // drawer={isAuthenticated || isRegisterAuthenticated ? true : false}
            drawer={false}
            hideNavBar
            contentComponent={Drawer}>
            <Scene key="root" hideNavBar>
              {/* SplashScreen */}
              <Scene key="splash" component={SplashScreen} hideNavBar initial />

              {/* Welcome */}
              <Scene
                key="welcome"
                component={Welcome}
                hideNavBar
                type="replace"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Routers);
