import {
  Body,
  Button,
  Card,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    width: 380,
    height: 60,
    alignSelf: 'center',
  },
});
class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  render() {
    return (
      <>
        <Container>
          <Header style={{ backgroundColor: 'white' }}>
            <Left>
              <Button onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Input placeholder="Input Your Room Number" />
            </Body>
          </Header>
          <Content>
            <ListItem>
              <Card style={styles.cardStyle}></Card>
            </ListItem>
          </Content>
        </Container>
      </>
    );
  }
}
export default search;
