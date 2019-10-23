import * as React from 'react';
import {Component} from 'react';
import {Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

// Redux
import {connect} from 'react-redux';

// Visual Components
import {Splash} from './styles';
import {colors} from '../../global';

const splash_logo = require('../../assets/img/react.png');

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.replace('welcome');
    }, 1500);
  }

  render() {
    return (
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={{flex: 1}}>
        <Splash>
          <Image
            source={splash_logo}
            style={{maxWidth: '50%', resizeMode: 'contain'}}
          />
        </Splash>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(SplashScreen);
