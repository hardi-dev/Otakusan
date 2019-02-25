import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { style } from './style';

export default class SectionTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = { style.container }>
        <View style = { style.left } >
            <Text style = { style.sectionTitle }> On Going </Text>
        </View>
        <View style = { style.right }>
            <Text style = { style.action }> More... </Text>
        </View>
      </View>
    );
  }
}
