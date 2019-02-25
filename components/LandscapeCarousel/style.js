import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

const screenWidth = Dimensions.get('window').width;
const width = screenWidth - (screenWidth / 2 ) + dimention.gutter;
const height = (screenWidth / 3);

export const style = StyleSheet.create({
    outerContainer: {
        paddingHorizontal: dimention.gutter,
        width: width + dimention.gutter,
        height
    },
    container: {
        width,
        height,
        borderRadius: dimention.radius,
        marginBottom: dimention.gutter,
    },
    title: {
        fontWeight: 'bold',
        fontSize: fontSize.subtitle,
        color: color.dark.default,
        textAlign: 'left'
    },
    metaContainer: {
        width,
        paddingHorizontal: dimention.gutter,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    metaText: {
        fontSize: fontSize.meta,
        color: color.gray.default
    }
})