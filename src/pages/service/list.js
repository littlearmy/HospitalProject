import React from 'react';
import axios from 'axios';
import {
  Body,
  Container,
  Content,
  Header,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';

class ser_list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serList: [],
    };
  }
  getList() {
    axios
      .get('https://hospital2021.000webhostapp.com/tampilsemuaLayanan.php')
      .then(res => {
        const serList = res.data.result;
        this.setState({serList});
        console.log(serList);
      });
  }
  render = () => {
    this.getList();
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.state.serList.map(list => {
              return (
                <ListItem service>
                  <Body>
                    <Text>{list.user_name}</Text>
                    <Text note>{list.com_name}</Text>
                  </Body>
                  <Right>
                    <Text note>{list.room}</Text>
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  };
}
export default ser_list;
