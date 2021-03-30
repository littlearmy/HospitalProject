import axios from 'axios';
import {
  Body,
  Button,
  Card,
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Left,
  Right,
  Row,
  Text,
  Title,
  View,
} from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    width: 120,
    height: 100,
    marginLeft: 12,
    marginTop: 15,
    borderColor: '#1411f0',
    borderRadius: 20,
    borderStartWidth: 2,
    borderBottomWidth: 2,
  },
  titleStyle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 27,
    fontWeight: 'bold',
    color: '#00e1ff',
  },
  numberStyle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: Dimensions.get('window').width / 3 - 4 * 4,
    height: Dimensions.get('window').height / 5 - 4 * 6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1411f0',
    borderRadius: 20,
    borderStartWidth: 2,
    borderBottomWidth: 2,
  },
})

class room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      head: 'Room List',
      room_Name: 'Name',
      room_Number: 'Number',
      room: [],
    };
  }
  getRoom() {
    axios.get('https://hospital2021.000webhostapp.com/room.php').then((res) => {
      const room = res.data.result;
      this.setState({ room });
    });
  }
  onClick = (item) => {
    console.log(item);
    this.props.navigation.navigate('detail_room', item);
  };
  render() {
    this.getRoom();
    const selectRoom = () => {};
    return (
      <>
        <Container ref="root" style={{ backgroundColor: '#9acddb' }}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>{this.state.head}</Title>
            </Body>
            <Right>
              <Icon
                name="search"
                onPress={() => this.props.navigation.navigate('search')}
              />
            </Right>
          </Header>
          <Content>
            <View>
              {this.state.room.map((room) => {
                return (
                  <TouchableOpacity onPress={() => this.onClick(room)}>
                    <Card style={styles.boxContainer}>
                      <Text style={styles.titleStyle}>{room.room_name}</Text>
                      <Text style={styles.numberStyle}>{room.room_type}</Text>
                    </Card>
                  </TouchableOpacity>
                )
              })}
            </View>
          </Content>
        </Container>
      </>
    );
  }
}

export default room;
