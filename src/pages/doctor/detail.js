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
class detail_doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  getRoom() {}
  render() {
    const {
      docId,
        docName,
        docPoly,
        docDay,
        docHours
    } = this.props.route.params;
    return (
      <>
        <Container>
          <Content >
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
                  {docName}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'Roboto_medium',
                    marginBottom: 40,
                    fontSize: 17,
                  }}>
                  {docPoly}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: 'Roboto_medium',
                    marginBottom: 10,
                    fontSize: 20,
                  }}>
                  {docDay}
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#ff0019',
                    fontSize: 35,
                  }}>
                  {docHours}
                </Text>
              </Body>
            </Card>
          </Content>
        </Container>
      </>
    );
  }
}
export default detail_doctor;
