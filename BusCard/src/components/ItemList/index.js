import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { colors, metrics, font } from '../../styles';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ItemList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
        };
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.container}>
                {/* <LinearGradient colors={[colors.primaria, colors.secundaria]} style={styles.container}>
                    <Text style={styles.titulo}> {this.props.children} </Text>
                </LinearGradient> */}
                <Icon name={this.props.icon} color={colors.primaria} size={font.icon_list}> </Icon>
                <Text style={styles.titulo}> {this.props.children} </Text>
                <Icon name={"ios-arrow-forward"} color={colors.primaria} size={font.icon_list}> </Icon>

            </TouchableOpacity>
        );

    }
}


