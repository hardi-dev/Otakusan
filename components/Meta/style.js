import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

export const style = StyleSheet.create({
    container: {
        paddingVertical: dimention.gutter
    },

    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomColor: color.gray.lighten,
        borderBottomWidth: 1,
    },

    metaValue: {
        flex: 1,
        textAlign: 'right' 
    }
})