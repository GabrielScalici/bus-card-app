/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Switch } from 'react-native-switch';

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
          <Header> Valor </Header>
          <View style={styles.vw_valor}>
            <Text style={styles.txt_valor}> R$ {this.state.valor} </Text>
          </View>

          <ScrollView style={styles.vw_recarregar}>
            <ButtonDefault> R$ 10</ButtonDefault>
            <ButtonDefault> R$ 15</ButtonDefault>
            <ButtonDefault> R$ 20</ButtonDefault>
            <ButtonDefault> R$ 25</ButtonDefault>
            <ButtonDefault> R$ 30</ButtonDefault>
            <ButtonDefault> R$ 40</ButtonDefault>
            <ButtonDefault> R$ 50</ButtonDefault>
            <ButtonDefault> R$ 60</ButtonDefault>
            <ButtonDefault> R$ 70</ButtonDefault>
            <ButtonDefault> R$ 80</ButtonDefault>
            <ButtonDefault> R$ 90</ButtonDefault>
            <ButtonDefault> R$ 100</ButtonDefault>
          </ScrollView>

          <View>
            <Text style={styles.txt_ds}> Outro Valor: </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <Switch
              barHeight={26}
              circleSize={24}
              backgroundActive={colors.primariaAzul}
              backgroundInactive={'#D0D0D0'}
              circleBorderWidth={0}
              onValueChange={(value) => this.setState({ saveInfo: value })}
              value={this.state.saveInfo}
            />
            <Text style={styles.subtitle}> Lembrar minhas informações </Text>

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
  vw_recarregar: {
    flexDirection: "row",
    padding: metrics.padding,
  },
  vw_valor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_ds: {
    fontSize: font.ds_label,
    fontFamily: 'System'
  },
  txt_valor: {
    fontSize: 70,
    fontFamily: 'System',
    color: colors.primaria,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'System',
    fontWeight: 'normal',
    textAlign: 'center',
    margin: 10,
    color: '#8093A5',
},
});
