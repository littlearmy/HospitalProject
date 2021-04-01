import axios from 'axios';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Image,
  Text,
} from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: { 
    width: 250,
    height: 250,
    marginLeft: 15,
    marginTop: 15,
    backgroundColor: '#c9d0ff',
    borderColor: '#1411f0',
    borderRadius: 20,
    borderStartWidth: 2,
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
});
class detail_room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      id_status: 0,
      status: 'kosong',
    };
  }
  getRoom() {}
  render() {
    const {
      id,
      room_type,
      floor_id,
      room_name,
      status,
    } = this.props.route.params;
    if(status == 1){
      this.state.status = 'Ada Isinya'
    }
    return (
      <>
        <Container>
          <Header />
          <Content>
            <Card style={styles.cardStyle}>
              <Body>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 22,
                    color: '#6775e0',
                    marginTop: 20,
                    marginBottom: 40,
                  }}>
                  {room_name}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'Roboto_medium',
                    marginBottom: 40,
                    fontSize: 17,
                  }}>
                  {room_type}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#ff0019',
                    fontSize: 35,
                  }}>
                  {this.state.status}
                </Text>
              </Body>
            </Card>
          </Content>
        </Container>
      </>
    );
  }
}
export default detail_room;
