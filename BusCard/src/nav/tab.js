/**
 * FRM - Esiga
 * 
 * Autor: Gabriel Henrique Campos Scalici
 * 
 * Função Tela : Chamada para todas as telas do projeto, com foco especial no Drawer
 *               de navegação principal do aplicativo
**/

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/EvilIcons';

import { metrics, font, colors } from '../styles';

//MAIN SCREENS
import homeScreen from '../model/homeScreen';
import configScreen from '../model/configScreen';


export default TabNavigator({
    Home: { screen: homeScreen },
    Configurações: { screen: configScreen },
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'navicon';
            } else if (routeName === 'Configurações') {
                iconName = 'gear';
            }

            return <Icon name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            //showLabel: false,
            renderIndicator: () => null,
            activeTintColor: colors.primaria,
            inactiveTintColor: colors.cinza_escuro,
            style: {
                backgroundColor: colors.cinza,
                height: 60,
            },
            labelStyle: {
                fontSize: font.ds_label,
            },
        },
});
