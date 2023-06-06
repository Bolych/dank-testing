import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CloseBackButton = ({ onPress, hasAddedTag }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons
                name={hasAddedTag ? 'arrow-left' : 'close'}
                size={24}
                color='#000'
            />
        </TouchableOpacity>
    );
};

export default CloseBackButton;
