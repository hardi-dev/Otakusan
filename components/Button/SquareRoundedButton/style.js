import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../../config'

const screenWidth = Dimensions.get('window').width;
const width = screenWidth - (screenWidth / 2 ) + dimention.gutter;
const height = (screenWidth / 3);

export const style = StyleSheet.create({
    outerCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        paddingVertical: dimention.gutter,
        fontWeight: 'bold',
    },
    primary: {
        backgroundColor: color.primary.default,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textLight: {
        color: color.white
    }

})