import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from "./Components/Main";


export default function App() {

    return (
        <View style={styles.container}>
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        width: '100vw', // Set width to 100vw for full width
        backgroundColor: '#F5F5F5',

    },
});
