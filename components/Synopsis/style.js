import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

export const style = StyleSheet.create({
    container: {
        marginTop: dimention.gutter,
        paddingVertical: 5,
        borderBottomColor: color.gray.lighten,
        borderBottomWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    metaValue: {
        textAlign: 'center'
    }
})