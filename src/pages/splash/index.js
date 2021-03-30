import * as React from 'react';
import {View, Text, Image, Button, ImageBackground} from 'react-native';
import Login from '../Login';



class Splash extends React.Component{
  render = () =>{
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: 100, height: 100}}
        source={require('../../public/image/hosp.png')}
      />
      <Button
        title="Get Started"
        onPress={() => this.props.navigation.navigate('Login')}
      />
    </View>
  );
  }
  
}

export default Splash;
