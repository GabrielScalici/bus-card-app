import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { colors, metrics, font } from '../../styles';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class ItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
        };
    }

    render() {
        return (
            <View>
                <LinearGradient colors={[colors.primaria, colors.secundaria]} style={styles.container}>
                    <Text style={styles.titulo}> {this.props.children} </Text>
                </LinearGradient>
            </View>
        );

    }
}


