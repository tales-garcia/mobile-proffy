import React, { useState, useContext } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';
import { Teacher } from '../TeacherList';
import { useFocusEffect } from '@react-navigation/native';
import FavoritesContext from '../../Contexts/FavoritesContext';

const Favorites: React.FC = () => {
    const [classes, setClasses] = useState([]);
    const {favorites} = useContext(FavoritesContext);

    useFocusEffect(
        React.useCallback(() => {
            loadClasses();
        }, [])
    );
    function loadClasses() {
        api.get('classes/data', {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzEzNDc2M2JkYTZmZTJiNTMzNWVkZCIsImlhdCI6MTU5NzEwMDU3NCwiZXhwIjoxNTk3MTg2OTc0fQ.6k6Hc2J__Cu0ny9gkJwxr-EEElFbQI_cdnIqXYWvZcY'
            }
        }).then(res => {
            setClasses(res.data.classesData);
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
                    if(favorites.includes(classItem._id))
                        return <TeacherItem favorited={true} key={classItem._id} teacher={classItem} />;
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;