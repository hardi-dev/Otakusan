import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style';

export default class SquareRoundedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { text, endpoint } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={.8}
        style = {[style.outerCenter, style.primary]} >
        <Text style = {[ style.text, style.textLight ]}> { text } </Text>
      </TouchableOpacity>
    );
  }
}
