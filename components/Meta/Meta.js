import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { style } from './style';
import { commonStyle } from '../CommonStyle';

export default class Meta extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  item = ( item, idx ) => {
    return (
        <View key = { idx } style = { style.itemContainer }>
            <Text style = { commonStyle.metaTitle }> { item.label }</Text>
            <Text style = {[ commonStyle.metaValue, style.metaValue ]}> { item.value } </Text>
        </View>
    )
  }

  render() {

    const { meta } = this.props;

    return (
      <View style = { style.container }>
        {
            meta.map( (item, idx) => (
                this.item(item, idx)
            ))
        }
      </View>
    );
  }
}
