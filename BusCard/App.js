/**
 * FRM - Esiga
 * 
 * Autor: Gabriel Henrique Campos Scalici
 * 
 * Função Tela : Chamada para todas as telas do projeto, com foco especial no Drawer
 *               de navegação principal do aplicativo
**/
import React from 'react';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//ROTAS DAS TELAS
import Routes from './Router';

export default props => (
    <Provider
        store={createStore(reducers)}    
    >
        <Router />
    </Provider>
);