import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface pageHeaderProps {
    title: string
}

const PageHeader: React.FC<pageHeaderProps> = (props) => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={() => navigate("Landing")}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={logo} resizeMode="contain" />
            </View>
            <Text style={styles.title}>{props.title}</Text>

            {props.children}
        </View>
    );
}

export default PageHeader;