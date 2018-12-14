/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

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
          <Header> BusCard </Header>

          <View style={styles.container_valor}>
            <Text style={styles.txt_ds_valor}> Valor </Text>
            <Text style={styles.txt_valor}> R$ {this.state.valor} </Text>
          </View>

          <View style={styles.btn_default}>
            <ButtonDefault> Voltar </ButtonDefault>
            <ButtonDefault> Usar </ButtonDefault>
          </View>
          
          <View style={styles.configuracoes}>
          <Text style={styles.txt_ds_valor}> Configurações </Text>
          <ItemList> Recarregar </ItemList>
          <ItemList> Cadastrar </ItemList>
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
  configuracoes:{
    
  }

});
