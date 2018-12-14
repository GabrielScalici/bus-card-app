/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';

type Props = {};
export default class homeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
    this.state = {
        valor: '32,00',
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header> BusCard </Header>

        <View style={styles.container_valor}>
            <Text style={styles.txt_ds_valor}> Valor </Text>
            <Text style={styles.txt_valor}> R$ {this.state.valor} </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container_valor:{
    margin: metrics.padding,
    padding: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cinza_mais_escuro,
    height: 200,
    borderRadius: 20,

  },
  txt_ds_valor:{
    fontSize: font.ds_label,
  },
  txt_valor:{
    fontSize: 60,
    color: colors.primaria,
  }

});
