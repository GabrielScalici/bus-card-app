/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { colors, font, metrics } from '../styles'; 

const logo = require('../../img/logo.png');

let widthS = Dimensions.get('window').width;

type Props = {};
export default class loginScreen extends Component<Props> {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={{justifyContent:'center', flex:7}}>

                    <View style={{flex:1,  justifyContent: 'center', alignItems: 'center', marginTop:150, marginBottom:100}}>
                        <Image style={{width: widthS - 14, height: widthS - 14, padding: 7, borderRadius: 50 }} source={logo} />
                    </View>
                </View>

                <View style={{justifyContent:'flex-end', flex:1}}>
                    <Text style={styles.subtitle}> Versão 1.0.0 </Text>
                    <Text style={styles.subtitle}> Gabriel Henrique Campos Scalici </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    welcome: {
        fontFamily: 'roboto',
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    subtitle:{
        fontSize: 10,
        textAlign: 'center',
        margin: 5,
        color: colors.primaria,
    }
});