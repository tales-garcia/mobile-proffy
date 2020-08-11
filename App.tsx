import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';
import { FavoritesProvider } from './src/Contexts/FavoritesContext';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_400Regular,
    Archivo_700Bold
  });
  if(!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
      <>
          <FavoritesProvider>
            <AppStack/>
          </FavoritesProvider>
          <StatusBar style="light" />
      </>
    );  
  }
}
