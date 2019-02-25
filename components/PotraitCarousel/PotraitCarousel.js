import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { dimention } from '../../config';
import { style } from './style';

const slideWidth = Dimensions.get('window').width;
const ItemWidth = (Dimensions.get('window').width / 2) - ( dimention.gutter * 2)

export default class PotraitCarousel extends Component {
  constructor(props){
    super();
    this.state = {
      errors: [],
      activeItem: 1
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
      <View>
        <Image
            style = { style.container } 
            source = {{ uri: item.thumb }}
          />
      </View>
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
          />
          <View style={ style.metaContainer }>
            <Text
              style = { style.title } > 
              { data[this.state.activeItem].title } 
            </Text>
            <Text
              style = { style.metaText } > 
              Rating : { data[this.state.activeItem].rating } 
            </Text>
          </View>
      </View>
    );
  }
}
