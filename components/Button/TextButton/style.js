import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../../config'

const screenWidth = Dimensions.get('window').width;
const width = screenWidth - (screenWidth / 2 ) + dimention.gutter;
const height = (screenWidth / 3);

export const style = StyleSheet.create({
    default: {
        fontSize: fontSize.default
    },
    primary: {
        color: color.primary.default
    }
})