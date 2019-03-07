import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

console.disableYellowBox = true;

import Splash from './src/screens/splashScreen';
import App from './App';

class Main extends Component {
    constructor(props){
        super(props);
        //Estado para verificar qual a tela esta sendo exibida (INICIAL ==> splashScreen)
        this.state = { atualScreen: 'Splash' };
        //Funcao temporizadora para mudar de tela após um período
        setTimeout(() => {
            this.setState({ atualScreen: 'App'})
        }, 2000)
    }

    render() {
        const {atualScreen} = this.state
        //Analise para ver qual tela esta sendo exibida para tomar as decisoes
        let mainScreen = atualScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen

    }
}



AppRegistry.registerComponent(appName, () => Main);
