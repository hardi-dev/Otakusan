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

    console.log(videoUrl);
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
            source={{ uri: 'https://r4---sn-npoeener.googlevideo.com/videoplayback?id=086ddee27fcbb38f&itag=18&source=picasa&begin=0&requiressl=yes&mm=30&mn=sn-npoeener&ms=nxu&mv=m&pl=20&sc=yes&ei=32p6XK-yAoyq1AbimISoCw&susc=ph&app=fife&mime=video/mp4&dur=1420.085&lmt=1551482269690362&mt=1551526477&ip=36.77.233.65&ipbits=8&expire=1551533823&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,mime,dur,lmt&signature=79CF2853FC44C2B3F853D9DDC58D91333763EB180F25D93F3FE81D9EE8AF1137.7A81B2558CD05A2C7009CF15DEF58EFA6EEFF19D2337796ACAAFEDB917350283&key=us0' }}
            // source={{ uri: videoUrl }}
            onEnterFullscreen = { () => this.onFullScrenn() }
            onBack = { () => this.goBack() }
            disableFullscreen = { isFullScreen }
        />
      </View>
    );
  }
}
