import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, Text, Image, TextInput, AsyncStorage } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Dropdown from '../../components/Dropdown';
import filter from '../../assets/images/icons/filtro.png';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import FavoritesContext from '../../Contexts/FavoritesContext';

export interface Teacher {
    _id: string,
    name: string,
    avatar: string,
    subject: string,
    bio: string,
    cost: string,
    whatsapp: string
}

const TeacherList: React.FC = () => {
    const [week_day, setWeek_day] = useState('');
    //const [week_dayLabel, setWeek_dayLabel] = useState('Selecione');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');

    const [classes, setClasses] = useState([]);
    //const [favorites, setFavorites] = useState<string[]>([]);
    const {favorites} = useContext(FavoritesContext);

    useEffect(() => UpdateFilters(), [subject, week_day, time]);

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    function loadFavorites() {
        // AsyncStorage.getItem('favorites').then(res => {
        //     if(res) {
        //         setFavorites(JSON.parse(res));
        //     }
        // }).catch(console.log);
        api.get('classes/data', {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzEzNDc2M2JkYTZmZTJiNTMzNWVkZCIsImlhdCI6MTU5NzEwMDU3NCwiZXhwIjoxNTk3MTg2OTc0fQ.6k6Hc2J__Cu0ny9gkJwxr-EEElFbQI_cdnIqXYWvZcY'
            }
        }).then(res => {
            setClasses(res.data.classesData);
        }).catch(console.log);
    }

    const UpdateFilters = () => {
        let params = {
            time: time,
            week_day: week_day,
            subject: subject
        }

        api.get('classes/data', {
            params,
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzEzNDc2M2JkYTZmZTJiNTMzNWVkZCIsImlhdCI6MTU5NzEwMDU3NCwiZXhwIjoxNTk3MTg2OTc0fQ.6k6Hc2J__Cu0ny9gkJwxr-EEElFbQI_cdnIqXYWvZcY'
            }
        }).then(res => {
            setClasses(res.data.classesData);
        }).catch(console.log);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis">
                <Dropdown title={(
                <>
                    <Image style={styles.filterImg} source={filter}/>
                    <Text style={styles.dropdownTitle}>Filtrar</Text>
                </>
                )} initialState={false}>
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Qual a matéria"
                        placeholderTextColor="#f2f2f2"
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                style={styles.input}
                                placeholder="Dia da semana"
                                placeholderTextColor="#f2f2f2"
                                value={week_day}
                                onChangeText={text => setWeek_day(text)}
                                />
                                {/* <Dropdown
                                title={
                                    <Text>{week_dayLabel}</Text>
                                }
                                initialState={false}
                                topBarStyle={styles.dropdownButtonWrapper}
                                >
                                    <View style={styles.dropdownContent}>
                                        <View style={styles.dropdownItemWrapper}>
                                            <RectButton style={styles.dropdownItem}>
                                                <Text style={styles.dropdownItemText}>Segunda</Text>
                                            </RectButton>
                                        </View>
                                        <View style={styles.dropdownItemWrapper}>
                                            <RectButton style={styles.dropdownItem}>
                                                <Text style={styles.dropdownItemText}>Segunda</Text>
                                            </RectButton>
                                        </View>
                                        <View style={styles.dropdownItemWrapper}>
                                            <RectButton style={styles.dropdownItem}>
                                                <Text style={styles.dropdownItemText}>Segunda</Text>
                                            </RectButton>
                                        </View>
                                        <View style={styles.dropdownItemWrapper}>
                                            <RectButton style={styles.dropdownItem}>
                                                <Text style={styles.dropdownItemText}>Segunda</Text>
                                            </RectButton>
                                        </View>
                                    </View>
                                </Dropdown> */}
                            </View>
                            
                            
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                style={styles.input}
                                placeholder="Horário"
                                placeholderTextColor="#f2f2f2"
                                value={time}
                                onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>
                    </View>
                </Dropdown>
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                {classes.map((classItem: Teacher) => {
                    return <TeacherItem favorited={favorites.includes(classItem._id)} key={classItem._id} teacher={classItem} />;
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;