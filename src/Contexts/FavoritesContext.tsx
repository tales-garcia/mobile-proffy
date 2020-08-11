import React, { createContext, FC, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const FavoritesContext = createContext({ favorites: new Array<string>(), addFunction: new Function(), removeFunction: new Function() });

export const FavoritesProvider: FC = (props) => {
    const [favoriteIds, setFavoriteIds] = useState<string[]>(getFavorites());

    useEffect(() => {
        AsyncStorage.setItem('favorites', JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    function addFavorite(id: string) {
        setFavoriteIds([...favoriteIds, id]);
    }
    function removeFavorite(id: string) {
        let finalArray = favoriteIds;
        const idIndex = finalArray.findIndex(idItem => {
            return idItem === id;
        });
        finalArray.splice(idIndex);
        setFavoriteIds(finalArray);
    }
    function getFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if(res) {
                return JSON.parse(res);
            }
        });

        return [];
    }
    return(
        <FavoritesContext.Provider value={{ favorites : favoriteIds, addFunction: addFavorite, removeFunction: removeFavorite }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;