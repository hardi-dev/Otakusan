import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style'

class ButtonCircleFill extends Component {
    constructor(props){
        super()
    }
    render() {

        const { endpoint } = this.props
        
        return (
            <TouchableOpacity style = { [style.outer, style.fillPrimary] }>
                <Text>P</Text>
            </TouchableOpacity>
        )
    }
}

class ButtonCircleBordered extends Component {
    constructor(props){
        super()
    }
    render() {

        const { endpoint } = this.props
        
        return (
            <TouchableOpacity style = { [style.outer, style.bordered] }>
                <Text>P</Text>
            </TouchableOpacity>
        )
    }
}

export { ButtonCircleFill, ButtonCircleBordered }