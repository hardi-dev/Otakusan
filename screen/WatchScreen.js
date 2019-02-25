import React, { Component } from 'react';
import { View, Text } from 'react-native';
import cheerio from 'react-native-cheerio';
import _ from 'lodash';

export default class WatchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const { navigation } = this.props;
    const endpoint = navigation.getParam('endpoint', 'no-data');
    this.getAnimeVideo(endpoint);
  }

  getAnimeVideo = async (endpoint) => {
    const fetchUrl = endpoint;
    const response = await fetch(fetchUrl);

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const videoURL = $('video source').attr("src");
    console.log(videoURL);

  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
