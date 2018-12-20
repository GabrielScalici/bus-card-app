/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonDefault from '../components/ButtonDefault';

//IMAGEM
const logo = require('../../img/logo.png');

type Props = {};
export default class configScreen extends Component<Props> {
  constructor(props) {
    super(props);

    //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
    this.state = {
      valor: '',
    };
  }

  refresh() {
    this.setState({valor: '1'});
  }
  render() {
    return (
      <View style={styles.container}>

        <Header> Configurações </Header>

        <ScrollView>
          <View style={styles.vw_logo}>
            <Image
              style={styles.logo}
              source={logo}
            />
          </View>

          <View style={styles.configuracoes}>
            <ItemList
              icon={"ios-cash"}
              onPress={() => {
                this.props.navigation.navigate('precosScreen', {
                  onGoBack: () => this.refresh(),
                });
              }}
            > Configurar Preços </ItemList>
            <ItemList
              icon={"ios-card"}
              onPress={() => {
                this.props.navigation.navigate('valorScreen', {
                  onGoBack: () => this.refresh(),
                });
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

  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  vw_logo: {
    padding: metrics.padding,
    margin: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
