import React, { useState } from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutline from '../../assets/images/icons/heart-outline.png';
import unfavoriteOutline from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';
import { Teacher } from '../../pages/TeacherList';
import api from '../../services/api';

interface teacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setFavorited] = useState<boolean>(favorited);

    async function toggleFavorite() {
        setFavorited(!isFavorited);

        const res = await AsyncStorage.getItem('favorites');
        let favorites = [];
        if(res) {
            favorites = JSON.parse(res);
        }

        if(!isFavorited) {
            favorites.push(teacher.id);
        } else {
            const teacherIndex = favorites.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favorites.splice(teacherIndex, 1);
            
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                    onPress={toggleFavorite}
                    style={[styles.favoriteButton, isFavorited && styles.favorited]}
                    >
                        {isFavorited ? <Image source={unfavoriteOutline} /> : <Image source={heartOutline} />}
                    </RectButton>

                    <RectButton onPress={() => {
                        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
                        api.post('connections', {
                            user_id: teacher.id
                        })
                        }} style={styles.contactButton}>
                        <Image source={whatsapp}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;