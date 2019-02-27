import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../../config';

export const style = StyleSheet.create({
    outer: {
        width: 36,
        height  : 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginHorizontal: 2.5,
    },
    fillPrimary: {
        backgroundColor: color.primary.default
    },
    bordered: {
        borderColor: color.gray.default,
        borderWidth: 2,
    }
})