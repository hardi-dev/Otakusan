import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { dimention } from '../../config';
import { style } from './style';

const slideWidth = Dimensions.get('window').width;
const ItemWidth = slideWidth - (slideWidth / 2 ) + (dimention.gutter * 2)

export default class LandscapeCarousel extends Component {
  constructor(props){
    super();
    this.state = {
      errors: [],
      activeItem: 0
    }
    this.props = props;
    this._carousel = {};
  }


  handleSnapToItem(index){
    this.setState({
      activeItem: index
    })
  }

  _renderItem = ( {item, index} ) => {
    return (
      <TouchableOpacity 
        activeOpacity={1}
        class = {style.outerContainer}
        onPress = { () => { 
            this.props.navigation.navigate('Watch', { 
                endpoint: item.endpoint }); 
            }}>
        <Image
            style = { style.container } 
            source = {{ uri: item.thumb }}
          />
        <View style={ style.metaContainer }>
            <Text
              style = { style.metaText } > 
              { `${item.episode} - ${item.time}` }
            </Text>
            <Text
              style = { style.title } > 
              { item.title } 
            </Text>
        </View>
      </TouchableOpacity>
    );
  }


  render() {

    const { data } = this.props;

    return (
      <View>
        <Carousel
            ref={ (c) => { this._carousel = c; } }
            data={data}
            renderItem={ this._renderItem.bind(this) }
            onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={slideWidth}
            itemWidth={ ItemWidth }
            layout={'default'}
            firstItem={this.state.activeItem}
            inactiveSlideScale = { 1 }
            activeSlideAlignment = { 'start' }
            containerCustomStyle = {{ paddingLeft: dimention.gutter }}
          />
      </View>
    );
  }
}
