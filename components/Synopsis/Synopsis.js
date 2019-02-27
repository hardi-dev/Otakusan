import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { style } from './style';
import { commonStyle } from '../CommonStyle';
import { ID } from '../../lang';
import TextButton from '../Button/TextButton/TextButton'
import ReadMore from 'react-native-read-more-text';


export default class Synopsis extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
        <TextButton text = {ID.readMore} onPress = { handlePress }/>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return (
        <TextButton text = {ID.readLess} onPress = { handlePress }/>
    );
  }

  render() {

    const { sinopsis } = this.props;

    return (
        <View style = { [style.container] }>
            <Text style = { commonStyle.metaTitle }> { ID.synopsis } </Text>
            <ReadMore
                numberOfLines = {3} 
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}>
                <Text style = {[ commonStyle.metaValue, style.metaValue ]}> { sinopsis } </Text>
            </ReadMore>
        </View>
    );
  }
}
