import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { color } from '../../config';

export default class CustomStatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <StatusBar
            barStyle="light-content"
            backgroundColor={ color.primary.default }
        />
    );
  }
}
