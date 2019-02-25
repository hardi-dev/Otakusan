import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';

const width = (Dimensions.get('window').width / 2) - ( dimention.gutter * 2)
const height = width + ( width / 2 );

export const style = StyleSheet.create({
    container: {
        width,
        height,
        borderRadius: dimention.radius,
        marginBottom: dimention.gutter,
    },
    title: {
        fontWeight: 'bold',
        fontSize: fontSize.title,
        color: color.dark.default,
        textAlign: 'center'
    },
    metaContainer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: dimention.gutter,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    metaText: {
        fontSize: fontSize.meta,
        color: color.gray.default
    }
})