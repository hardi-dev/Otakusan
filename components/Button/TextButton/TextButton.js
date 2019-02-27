import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style';

export default class TextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { text, endpoint, onPress } = this.props;

    return (
      <Text style = {[ style.default, style.primary ]} onPress = { onPress }> { text } </Text>
    );
  }
}
