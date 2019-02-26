import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { style } from './style.js';

const gradient_bg = require('../../src/img/gradient_bg.png');

export default class SquareThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uri : ''
    };
  }

  render() {
    const { thumb } = this.props;

    return (
      <ImageBackground 
        blurRadius={10}
        source = {{ uri: thumb }}
        style = { style.container } >

        <ImageBackground 
            source = { gradient_bg }
            style = { style.container } >

            <Image
                style = { style.thumb }
                source = {{ uri: thumb }}
            />
        </ImageBackground>

      </ImageBackground>
    );
  }
}
