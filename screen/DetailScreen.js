import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import cheerio from 'react-native-cheerio';
import _ from 'lodash';
import CustomStatusBar from '../components/StatusBar/CustomStatusBar';
import SquareThumb from '../components/SquareThumb/SquareThumb';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        animeDetail: {},
        isLoading: true
    };
  }

  componentDidMount(){
    const { navigation } = this.props;
    const endpoint = navigation.getParam('endpoint', 'no-data');

    this.getAnimeDetail(endpoint);
  }

  getAnimeDetail = async (endpoint) => {
    const fetchUrl = endpoint;
    const response = await fetch(fetchUrl);

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    
    const title = $('.jdlrs h1').text();
    const thumb = $('.attachment-post-thumbnail').attr('src');
    const sinopsis = $('.sinopc em').first().text();

    const metaSelector = $('.fozer ul li');
    const meta = []

    metaSelector.map( async (_, item) => {
        const label = $('b', item).text();
        const value = $(item).text().substring($(item).text().indexOf(":") + 1);
        await meta.push({ label, value })
    })

    const episodeSelector = $('.episodelist li');
    const episodeList = [];

    episodeSelector.map( async (_, item) => {
        await episodeList.push({
            episode: $('.leftoff a', item).text(),
            endpoint: $('.leftoff a', item).attr("href"),
            dateRelease: $('.rightoff', item).text()
        })
    })

    const animeDetail = { title, thumb, meta, episodeList }
    this.setState({
        animeDetail,
        isLoading: false
    })
  }

  render() {

    const { animeDetail, isLoading } = this.state;

    if ( isLoading ) {
        return (
            <View>
                <CustomStatusBar/>
                <Text> Loading...</Text>
            </View>
        )
    }

    return (
      <ScrollView>
          <SquareThumb  thumb = { animeDetail.thumb }  />
      </ScrollView>
    );
  }
}
