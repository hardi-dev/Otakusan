import React, { Component } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import { EndPoint } from '../config';
import cheerio from 'react-native-cheerio';
import _ from 'lodash';
import PotraitCarousel from '../components/PotraitCarousel/PotraitCarousel';
import CustomStatusBar from '../components/StatusBar/CustomStatusBar';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import LandscapeCarousel from '../components/LandscapeCarousel/LandscapeCarousel';


export default class HomeScreen extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
        featuredAnime : [],
        latestAnime : [],
        news: [],
        isLoading: true,
        featuredAnimePage: 1
    };
  }


  componentDidMount(){
    this.getAnime();
  }

  getAnime = async () => {
    const fetchUrl = EndPoint.featured;
    const response = await fetch(fetchUrl);

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);


    // Featured Anime
    const resultfeaturedAnime = $('.carousel-cell');
    const featuredAnime = [];
    resultfeaturedAnime.map( async (_, item) => {
        await featuredAnime.push({
            thumb: $('.attachment-thumb', item).attr("src"),
            title: $('h2 a:not(.series)', item).text(),
            endpoint: $('h2 a:not(.series)', item).attr("href"),
            rating: parseFloat($('.tipi2', item).text())
        })
    })

    // Latest Release
    const resultLatest = $('.kover');
    const latestAnime = [];
    resultLatest.map( async (_, item) => {
        await latestAnime.push({
            thumb: $('.attachment-post-thumbnail', item).attr("src"),
            title: $('.episodeyes a', item).text(),
            endpoint: $('.thumb > a', item).attr("href"),
            episode: $('.law h2', item).text(),
            time: $('.tipe', item).text()
        })
    })

    this.setState({
      featuredAnime,
      latestAnime,
      isLoading: false  
    })
  }


  render() {
    const { featuredAnime, latestAnime, isLoading } = this.state;
    const { navigation } = this.props;

    if ( isLoading ) {
        return (
            <View>
                <CustomStatusBar/>
                <Text> Loading...</Text>
            </View>
        )
    }

    return (
      <View>
        <CustomStatusBar/>

        <SectionTitle/>
        <PotraitCarousel data = { featuredAnime } />

        <SectionTitle/>
        <LandscapeCarousel data = { latestAnime } navigation = { navigation }/>

      </View>
    );
  }
}
