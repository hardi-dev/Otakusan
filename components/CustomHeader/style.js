import { StyleSheet, Dimensions } from 'react-native';
import { dimention, fontSize, color} from '../../config';
import { Platform } from "react-native";

export const style = StyleSheet.create({
    header: {
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0,
        backgroundColor: color.primary.default,
        display: 'flex',
        flexDirection: 'row',
    },
    left : {
        flex: 1
    },
    center: {
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 1
    },
    appname: {
        fontWeight: 'bold',
        color: color.white
    },
    headline: {
        color: color.white,
        fontSize: fontSize.meta,
        textAlign: 'center'
    }
})