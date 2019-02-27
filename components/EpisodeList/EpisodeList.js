import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonCircleFill, ButtonCircleBordered } from '../Button/CircleButton/ButtonCircle';
import { style } from './style';

export default class EpisodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _item = (item, idx) => {
      return (
        <View style = { style.itemContainer } key = { idx }>
            <Text style = {[ style.text, style.number ]} > { idx + 1 } </Text>
            <Text style = {[ style.text, style.episode ]} > { `Episode ${item.episode}` } </Text>
            <ButtonCircleBordered endpoint = { item.endpoint }/>
            <ButtonCircleFill endpoint = { item.endpoint } />
        </View>
      )
  }

  render() {

    const { data } = this.props;

    return (
      <View>
        {
            data.map((item, idx) => (
                this._item(item, idx)
            ))
        }
      </View>
    );
  }
}
