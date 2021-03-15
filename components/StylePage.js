import {StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
    },
    textBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        margin: 10,
        width: 200,
    },
});

export {mainStyle};