import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

const { width } = Dimensions.get('window');
const thumbWidth = (Dimensions.get('window').width / 2) - ( dimention.gutter * 2)
const thumbHeight = thumbWidth + ( thumbWidth / 2 );


export const style = StyleSheet.create({
    container: {
        width: width,
        height: thumbHeight + 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumb: {
        width: thumbWidth,
        height: thumbHeight,
        borderRadius: dimention.radius,
        marginBottom: dimention.gutter,
    }
})