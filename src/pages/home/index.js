import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Title,
  Grid,
  Row,
  Col,
} from 'native-base';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  cardStyle: {
    width: 180,
    height: 230,
    marginLeft: 15,
    marginTop: 15,
    borderColor: '#1411f0',
    borderRadius: 20,
    borderStartWidth: 2,
    borderBottomWidth: 2,
  },
  imgStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  txtStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    marginTop: 33,
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
    }
    
  }
  render() {
    const { name, id } = this.props.route.params;
    console.log(this.state.id);
    return (
      <>
        <Container style={{ backgroundColor: '#9dbaed' }}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>
                  Log Out
                </Text>
              </Button>
            </Left>
            <Right>
              <Text style={{ alignSelf: 'center', color: 'white' }}>
                {name}
              </Text>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <Content style={{ alignContent: 'stretch' }}>
            <Grid>
              <Col>
                <Row>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Service',{id:id})}>
                    <Card style={styles.cardStyle}>
                      <Image
                        source={require('../../public/image/service.png')}
                        style={styles.imgStyle}></Image>
                      <Text style={styles.txtStyle}>Pelayanan</Text>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Dokter')}>
                    <Card style={styles.cardStyle}>
                      <Image
                        source={require('../../public/image/time.png')}
                        style={styles.imgStyle}></Image>
                      <Text style={styles.txtStyle}>Jadwal Dokter</Text>
                    </Card>
                  </TouchableOpacity>
                </Row>
                <Row>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('room')}>
                    <Card style={styles.cardStyle}>
                      <Image
                        source={require('../../public/image/room.png')}
                        style={styles.imgStyle}></Image>
                      <Text style={styles.txtStyle}>Ruangan</Text>
                    </Card>
                  </TouchableOpacity>
                  <Card style={styles.cardStyle}>
                    <Image
                      source={require('../../public/image/contact.png')}
                      style={styles.imgStyle}></Image>
                    <Text style={styles.txtStyle}>Customer Service</Text>
                  </Card>
                </Row>
              </Col>
            </Grid>
          </Content>
        </Container>
      </>
    );
  }
}
export default Home;
