import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

export const style = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: color.gray.lighten,
        borderBottomWidth: 1,
        paddingVertical: 5,
    },

    number: {
        width: 20
    },

    episode: {
        flex: 1,
        paddingLeft: dimention.gutter,
    },

    text: {
        fontWeight: '500',
        color: color.dark.default
    },

    btnGutter: {
        marginLeft: dimention.gutter
    }
})