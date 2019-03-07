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
    Dimensions, ScrollView,
    Linking
} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

//COMPONENTES
import Header from '../components/Header';

//IMAGENS
const logo = require('../../img/logo.png');
const persona = require('../../img/GabrielScalici.jpg');

//MEDIDAS
let widthS = Dimensions.get('window').width;
import { colors, font, metrics } from '../styles';

type Props = {};
export default class usScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    back
                    onPress={() => {
                        this.props.navigation.goBack(null);
                    }}
                > Sobre </Header>
                <ScrollView>
                    <LinearGradient colors={[colors.secundaria, colors.primaria]} style={styles.vw_foto}>
                        <Text style={styles.title}> Criado por:</Text>
                        <Image
                            source={persona}
                            style={styles.foto}
                        />
                        <Text style={styles.subtitle}> Gabriel Scalici </Text>
                    </LinearGradient>

                    <Text style={styles.title_info}> Redes sociais </Text>
                    <View style={styles.social}>
                        <SocialIcon
                            onPress={() => {
                                Linking.openURL('https://www.instagram.com/salchiis/');
                            }}
                            style={styles.icon_social}
                            button
                            type='instagram'
                        />
                        <SocialIcon
                            onPress={() => {
                                Linking.openURL('https://www.facebook.com/gabrielhenrique.camposscalici');
                            }}
                            style={styles.icon_social}
                            button
                            type='facebook'
                        />
                        <SocialIcon
                            onPress={() => {
                                Linking.openURL('https://twitter.com/?logout=1551986724328');
                            }}
                            style={styles.icon_social}
                            button
                            type='twitter'
                        />
                        <SocialIcon
                            onPress={() => {
                                Linking.openURL('https://github.com/GabrielScalici');
                            }}
                            style={styles.icon_social}
                            button
                            type='github'
                        />
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    vw_foto: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: metrics.padding,
        padding: metrics.double_padding,
        borderRadius: 20,
    },
    foto: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    title: {
        fontFamily: 'System',
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: 'white',
    },
    title_info: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: colors.primaria,
    },
    info: {

    },
    icon_social: {
        width: 60,
        height: 60,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: metrics.padding,
    }
});
