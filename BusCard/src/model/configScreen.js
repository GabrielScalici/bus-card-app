/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonDefault from '../components/ButtonDefault';

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

        <ScrollView>
          <Header> Configurações </Header>

          <View style={styles.configuracoes}>
            <ItemList
              icon={"ios-cash"}
            > Configurar Preços </ItemList>
            <ItemList
              icon={"ios-card"}
              onPress={() => {
                this.props.navigation.navigate('valorScreen');
              }}
            > Recarregar </ItemList>
            <ItemList
              icon={"ios-time"}
            > Configurar integração </ItemList>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container_valor: {
    margin: metrics.padding,
    padding: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cinza_mais_escuro,
    height: 200,
    borderRadius: 20,

  },
  txt_ds_valor: {
    fontSize: font.ds_label,
  },
  txt_valor: {
    fontSize: 60,
    color: colors.primaria,
  },
  btn_default: {
    flexDirection: "row",
    paddingVertical: metrics.padding,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  configuracoes: {

  }

});
