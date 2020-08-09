import React from 'react';
import { TextInput, Text } from 'react-native';

import styles from './styles';

interface inputProps {
    label: string
}

const Input: React.FC<inputProps> = (props) => {
    return (
        <>
            <Text style={styles.label}></Text>
            <TextInput style={styles.input}/>
        </>
    );

}

export default Input;