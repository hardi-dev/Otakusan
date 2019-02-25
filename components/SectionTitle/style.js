import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';
import { Platform } from "react-native";

const width = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        width,
        paddingVertical: dimention.gutter,
        paddingHorizontal: (dimention.gutter * 2),
        display: 'flex',
        flexDirection: 'row',
    },
    left: {
        flex: 3
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    sectionTitle: {
        fontSize: fontSize.subtitle,
        fontWeight: 'bold',
        color: color.dark.default
    },
    action: {
        fontSize: fontSize.default,
        color: color.gray.default,
        textAlign: 'right'
    }
})