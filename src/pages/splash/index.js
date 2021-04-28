import axios from 'axios';
import * as React from 'react';
import {View, Text, Image, Button, ImageBackground} from 'react-native';
import Login from '../Login';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: [],
    };
  }
  cekToken() {
    axios
      .get('https://hospital2021.000webhostapp.com/showToken.php')
      .then(res => {
        console.log(res.data.token);
        if (res.data.token != null) {
          this.props.navigation.navigate('Home', {
            name: res.data.name,
            id: res.data.id,
          });
        }else{
          this.props.navigation.navigate('Login');
        }
      });
  }
  render = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../../public/image/hosp.png')}
        />
        <Button title="Get Started" onPress={() => this.cekToken()} />
      </View>
    );
  };
}

export default Splash;
