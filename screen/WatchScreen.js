import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions } from 'react-native';
import cheerio from 'react-native-cheerio';
import _ from 'lodash';
import VideoPlayer from 'react-native-video-controls';
import CustomStatusBar from '../components/StatusBar/CustomStatusBar';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

export default class WatchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        videoUrl: '',
        isLoading: true,
        videoWidth: height,
        videoHeight: width,
        isFullScreen: true
    };
  }

  componentDidMount(){

    StatusBar.setHidden(true);

    const { navigation } = this.props;
    const endpoint = navigation.getParam('endpoint', 'no-data');
    this.getAnimeVideo(endpoint);

    Orientation.lockToLandscape();
  }

  getAnimeVideo = async (endpoint) => {
    const fetchUrl = endpoint;
    const response = await fetch(fetchUrl);

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    const videoUrl = await $('video source').attr("src");
    this.setState({
        videoUrl,
        isLoading: false
    })
  }

  onFullScrenn = () => {
    Orientation.lockToLandscape();
    this.setState({
      videoWidth: height,
      videoHeight: width
    })
  }

  goBack = () => {
    this.props.navigation.goBack();
    Orientation.lockToPortrait();
  }

  render() {
    const { videoWidth, videoHeight, videoUrl, isLoading, isFullScreen } = this.state;
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
      <View style = {{ width: videoWidth, height: videoHeight, backgroundColor: 'red' }}>
        <VideoPlayer
            style = {{ flex: 1}}
            source={{ uri: videoUrl }}
            onEnterFullscreen = { () => this.onFullScrenn() }
            onBack = { () => this.goBack() }
            disableFullscreen = { isFullScreen }
        />
      </View>
    );
  }
}
