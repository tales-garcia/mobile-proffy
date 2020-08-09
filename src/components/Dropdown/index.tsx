import React, { useState, ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import arrow from '../../assets/images/icons/select.png';

import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

interface dropdownProps {
    title: ReactNode,
    initialState: boolean,
    topBarStyle?: object
}

const Dropdown : React.FC<dropdownProps> = (props) => {

    const [activated, setActivated] = useState(props.initialState);

    return (
        <View style={styles.container}>
            <View style={props.topBarStyle ? props.topBarStyle : styles.buttonWrapper}>
                <BorderlessButton onPress={() => setActivated(!activated)} style={styles.topBarContent}>
                    <View style={styles.topBarLeftContent}>
                        {props.title}
                    </View>

                    <Image style={styles.selectImg} source={arrow}/>
                </BorderlessButton>
            </View>

            {activated && props.children}
        </View>
    );
    
}

export default Dropdown;