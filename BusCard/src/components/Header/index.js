import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics, font } from '../../styles';
import styles from './styles';

const logo = require('../../../img/logo.png');

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
        };
    }

    render() {
        if (this.props.back) {
            return (
                <View>
                    <LinearGradient colors={[colors.secundaria, colors.primaria]} style={styles.container_back}>
                        <TouchableOpacity
                            onPress={this.props.onPress}
                        >
                            <Icon name={"ios-arrow-back"} color={colors.branco} size={40}> </Icon>
                        </TouchableOpacity>
                        <Text style={styles.titulo}> {this.props.children} </Text>
                        <View style={{width: 30}}></View>
                    </LinearGradient>
                </View>
            );
        } else {
            return (
                <View>
                    <LinearGradient colors={[colors.secundaria, colors.primaria]} style={styles.container}>

                        <View>
                            <Text> </Text>
                        </View>
                        <Text style={styles.titulo}> {this.props.children} </Text>
                        <View>
                            <Text> </Text>
                        </View>
                    </LinearGradient>
                </View>
            );
        }
    }
}


