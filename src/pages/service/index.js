import React from 'react';
import {
  Container,
  Header,
  Text,
  Content,
  Form,
  Icon,
} from 'native-base';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keluhan: [],
      selected: null,
      room:[],
      doctor:"",
      user_id:null,
      selectedRoom:null,
      complaint_name:"",
      price:null
    };
  }
  getComplaint() {
    axios
      .get('https://hospital2021.000webhostapp.com/complaint.php')
      .then((res) => {
        const keluhan = res.data.result;
        this.setState({ keluhan });
      });
  }
  getRoom() {
    axios
      .get('https://hospital2021.000webhostapp.com/room.php')
      .then((res) => {
        const room = res.data.result;
        this.setState({ room });
      });
  }
  selectItem(){
    var keluhan = this.state.selected;
    var ruangan = this.state.selectedRoom;
    var id = this.state.user_id;
    if(keluhan == null || ruangan == null){
      alert("Select An Option")
    } else{
      axios
      .post('https://hospital2021.000webhostapp.com/addLayanan.php',JSON.stringify({complaint_id : keluhan, room_id : ruangan, user_id : id}),)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
    }

  }
  render = () => {
    const { id } = this.props.route.params;
    this.state.user_id=id;
    this.getComplaint();
    this.getRoom();
    return (
      <Container>
        <Header />
        <Content
          style={{
            marginHorizontal: '5%',
            marginRight: '10%',
            backgroundColor: '#9acddb',
          }}>
          <Text
            style={{ alignSelf: 'center', fontSize: 24, fontWeight: 'bold' }}>
            Keluhan
          </Text>
          <Form style={{ backgroundColor: 'white', marginBottom:"5%"}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selected}
                onValueChange={(itemValue,itemIndex) => this.setState({selected:itemValue})}>
                  <Picker.Item label="Pilih Keluhan" value=""/>
                {this.state.keluhan.map((keluhan) => {
                  return (
                    <Picker.Item
                      label={keluhan.complaint_name}
                      value={keluhan.id}
                    />
                  );
                })}
              </Picker>
          </Form>
          <Form style={{ backgroundColor: 'white', marginBottom:"5%"}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selectedRoom}
                onValueChange={(itemValue,itemIndex) => this.setState({selectedRoom:itemValue})}>
                  <Picker.Item label="Pilih Ruangan" value=""/>
                {this.state.room.map((room) => {
                  return (
                    <Picker.Item
                      label={room.room_name}
                      value={room.id}
                    />
                  );
                })}
              </Picker>
          </Form>
          
          <Button title='Submit' onPress={()=>this.selectItem()}/>
        </Content>
      </Container>
    );
  };
}
export default Service;
