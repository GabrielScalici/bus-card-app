/**
 * FRM - Esiga
 * 
 * Autor: Gabriel Henrique Campos Scalici
 * 
 * Função Tela : Chamada para todas as telas do projeto, com foco especial no Drawer
 *               de navegação principal do aplicativo
**/

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

//MAIN SCREENS
import homeScreen from './src/model/homeScreen';
import configScreen from './src/model/configScreen';

//NAVIGATIONS
import tab from './src/nav/tab';

//SCREENS
import valorScreen from './src/screens/valorScreen';

const Nav = StackNavigator({
    homeScreen: { screen: homeScreen },
    valorScreen: { screen: valorScreen },
    tab: { screen: tab },
}, {
    // Default config for all screens
    headerMode: 'none',
    //title: 'Main',
    initialRouteName: 'homeScreen',
});

export default Nav