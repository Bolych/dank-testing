import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CloseBackButton from './CloseBackButton';

export default function Header({ onPress, hasAddedTag, text }) {

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20
        },
        centerText: {
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
        },
    });


    return (
        <View style={styles.row}>
            <CloseBackButton onPress={onPress} hasAddedTag={hasAddedTag} />
            <Text style={styles.centerText}>{text}</Text>
        </View>
    );
}

