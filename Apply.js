import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Item, Input } from 'native-base';
import axios from 'axios'

export default class Apply extends Component {
    constructor(){
        super()
        this.state = { 
            data : [], 
        }
    }

    componentWillMount(){
        axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Chelsea')
        .then (response => {
            
            this.setState ({ data : response.data.player })
        })
    };

    renderPlayer() {
        return this.state.data.map((x,i) =>
        <Card key={i}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: x.strThumb}} />
                <Body>
                  <Text>{x.strPlayer}</Text>
                  <Text note>{x.strTeam}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: x.strThumb}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Position</Text>
                <Text note>{x.strPosition}</Text>
              </Body>
              <Body>
              <Text>Nationality</Text>
                <Text note>{x.strNationality}</Text>
              </Body>
              <Body>
                <Text>Date Born</Text>
                <Text note>{x.dateBorn}</Text>
              </Body>
            </CardItem>
          </Card>
        );
    }

    

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {this.renderPlayer()}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
            <Text>Player Football</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}