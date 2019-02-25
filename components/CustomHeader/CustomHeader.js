import React from "react";
import { Header } from "react-navigation";
import { View, Platform, Text } from "react-native";
import { style } from './style';

const CustomHeader = props => {
  return (
    <View
      style={ style.header }
    >
        <View style = { style.left }>

        </View>  

        <View style = { style.center }>
            <Text style = { style.appname } > OTAKUSAN </Text>
            <Text style = { style.headline }> Streaming Anime &amp; Baca Manga </Text>
        </View>

        <View style = { style.right }>

        </View>

    </View> 
  );
};

export default CustomHeader;