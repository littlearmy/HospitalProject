import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  Container,
  Button,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import { AppStyles } from '../../AppStyle.js';
import axios from 'axios';

class Login extends React.Component {
  state = {
    user_id: '',
    pass: '',
    name: '',
    id: '', 
  };
 
  onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    })
  }
  doLogin() {
    const { user_id, pass } = this.state;
    const req = {
      username: user_id,
      password: pass,
    }
    axios
      .post(
        'https://hospital2021.000webhostapp.com/tampilLogin.php',
        JSON.stringify({
          username: user_id,
          password: pass,
        }),
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success == 1) {
          this.state.name = res.data.name;
          this.state.id = res.data.id;
          this.props.navigation.navigate('Home', {
            name: this.state.name,
            id: this.state.id,
          });
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      });
  }
  render = () => {
    const { user_id, pass } = this.state;
    return (
      <>
        <View style={styles.container}>
          <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              placeholder="Username"
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
              value={user_id}
              onChangeText={(value) => this.onChangeHandle('user_id', value)}
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.body}
              secureTextEntry={true}
              placeholder="Password"
              value={pass}
              onChangeText={(value) => this.onChangeHandle('pass', value)}
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent"
            />
          </View>
          <Button
            style={{alignSelf:'center'}}
            onPress={() => this.doLogin()}>
            <Text
              style={{ color: 'black', fontWeight: 'bold'}}>
              LOG IN
            </Text>
          </Button>
        </View>
      </>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  or: {
    fontFamily: 'Noto Sans',
    color: 'black',
    marginTop: 40,
    marginBottom: 10
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
    marginBottom: 20
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: '10%'
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  placeholder: {
    fontFamily: 'Noto Sans',
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});

export default Login;
