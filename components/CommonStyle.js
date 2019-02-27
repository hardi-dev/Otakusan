import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color } from '../config';

const { width, height } = Dimensions.get('window');

export const commonStyle = StyleSheet.create({
    container: {
        width,
        paddingHorizontal: dimention.gutter * 2
    },

    title: {
        fontSize: fontSize.title,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: dimention.gutter,
    },

    metaTitle: {
        fontSize: fontSize.default,
        fontWeight: 'bold',
        color: color.dark.default
    },

    metaValue: {
        fontSize: fontSize.default,
        color: color.dark.lighten
    },

})