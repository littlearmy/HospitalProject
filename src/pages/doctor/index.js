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
} from 'native-base';

export default class Doctor extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>dr. Rahmat Almubarak</Text>
              </Left>
              <Right>
                <Icon
                  name="arrow-forward"
                  onPress={() => this.props.navigation.navigate('detail_doctor')}
                />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
