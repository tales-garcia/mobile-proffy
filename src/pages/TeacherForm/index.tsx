import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';
import giveClassesBGImg from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function TeacherForm() {
    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBGImg} style={styles.backgroundImage}>
                <Text style={styles.title}>Quer ser um proffy</Text>
                <Text style={styles.description}>Para comçar, você precisa se cadastrar na nossa plataforma web.</Text>
            </ImageBackground>

            <RectButton onPress={() => goBack()} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default TeacherForm;