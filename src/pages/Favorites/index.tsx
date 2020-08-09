import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';
import { Teacher } from '../TeacherList';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {

    const [classes, setClasses] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if(res) {
                setFavorites(JSON.parse(res));
            }
        });
        api.get('classes').then(res => {
            setClasses(res.data);
        });
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                {classes.map((classItem: Teacher) => {
                    if(favorites.includes(classItem.id))
                        return <TeacherItem favorited={true} key={classItem.id} teacher={classItem} />;
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;