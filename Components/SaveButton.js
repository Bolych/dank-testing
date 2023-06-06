import React from 'react';
import { Button } from 'react-native-paper';

export default function SaveButton({ onPress, active }) {
    return (
        <Button
            mode={active? 'contained' : 'text'}
            disabled={!active}
            onPress={onPress}
            style={{ marginTop: 20,  backgroundColor: active ? 'blue' : '#ADD3F7' }}
        >
            Save
        </Button>
    );
}
