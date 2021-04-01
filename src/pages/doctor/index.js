import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  View,
} from 'native-base';
import { Button } from 'react-native';
import axios from 'axios';

class Doctor extends Component {
  constructor(props){
    super(props);
    this.state={
      docName:'',
      docId:'',
      doctor:[],
    }
  }
  getDoctor() {
    axios.get('https://hospital2021.000webhostapp.com/tampilsemuaDokter.php').then((res) => {
      const doctor = res.data.result;
      this.setState({ doctor });
      console.log(doctor);
    });
  }
  render() {
    const selectItem = (item) =>{
      
      const req = {
        docId:item.id,
        docName:item.doctor_name,
        docPoly:item.doctor_poly,
        docDay:item.doctor_day,
        docHours:item.doctor_hours
      }
      this.props.navigation.navigate('detail_doctor',req);
    }
    return (
      <Container>
        <Header />
        <Content>
        <Button title='Test' onPress={()=> this.getDoctor()}></Button>
        <View>
         {this.state.doctor.map((doctor) =>
         {
           return(
            <List>
            <ListItem selected>
              <Left>
           <Text>{doctor.doctor_name}</Text>
              </Left>
              <Right>
                <Icon
                  name="arrow-forward"
                  onPress={()=>selectItem(doctor)}
                />
              </Right>
            </ListItem>
          </List>
           )
         })} 
        
        </View>
          
        </Content>
      </Container>
    );
  }
}
export default Doctor;
