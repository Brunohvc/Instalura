import { StyleSheet, Dimensions } from 'react-native'

const widthScreen = Dimensions.get('screen').width * 0.8;
const style = StyleSheet.create({
    container: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        width: widthScreen,
        textAlign: 'center',
        marginTop: 40,
        fontSize: 30
    },
    button: {
        alignItems: 'center',
        marginBottom: 50
    }
});

export default style;