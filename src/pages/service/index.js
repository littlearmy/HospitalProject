import React from 'react';
import {
  Container,
  Header,
  Text,
  Content,
  Form,
  Picker,
  Left,
  Icon,
  Item,
  Title,
  ListItem,
} from 'native-base';
import axios from 'axios';
import { Button, FlatList } from 'react-native';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keluhan: [],
      selected: null,
      doctor: '',
      complaint_name: [],
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
  onValueChange = (value: string) => {
    this.setState({
      selected: value,
    });
  };

  render = () => {
    const { id } = this.props.route.params;
    this.getComplaint();
    const selectItem = (item) => {
      console.log(item);
    }
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
          <Form style={{ backgroundColor: 'white' }}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                {this.state.keluhan.map((keluhan) => {
                  this.state.doctor = keluhan.doctor_name;
                  return (
                    <Picker.Item
                      label={keluhan.complaint_name}
                      value={() => selectItem(keluhan)}
                    />
                  );
                })}
              </Picker>
            </Item>
          </Form>
          <Text style={{ marginTop: '5%', alignSelf: 'center' }}>
            {this.state.doctor}
          </Text>
        </Content>
      </Container>
    );
  };
}
export default Service;
