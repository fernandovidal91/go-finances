import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { StatusBar, Text } from 'react-native';
import { SignIn } from './src/screens/SignIn';

import { AppRoutes } from './src/routes/app.routes';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Carregando fonts...</Text>
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <NavigationContainer>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

