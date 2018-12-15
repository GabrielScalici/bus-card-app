/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Alert, TextInput } from 'react-native';
import { Switch } from 'react-native-switch';
import Icon from 'react-native-vector-icons/Ionicons';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonText from '../components/ButtonText';
import ButtonDefault from '../components/ButtonDefault';

type Props = {};
export default class homeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
    this.state = {
      valor: 32.00,
      valor_digitado: 0,
      meia: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header
          back
          onPress={() => this.props.navigation.goBack(null)}
        > Recarregar </Header>
        <ScrollView>

          <View style={styles.vw_valor}>
            <Text style={styles.txt_ds}> Total </Text>
            <Text style={styles.txt_valor}> R$ {this.state.valor} </Text>
          </View>

          <Text style={styles.txt_ds}> Valor para recarregar </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: metrics.padding }}
          >
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
            <Text style={styles.txt_ds}> Outro Valor </Text>
          </View>

          <View style={styles.container_outro_valor}>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>

              <Icon style={styles.icon} color={colors.primaria} name={"ios-cash"} />

              <TextInput
                placeholder="Digite o valor a ser recarregado"
                placeholderTextColor='white'
                style={styles.txt_placeholder}
                underlineColorAndroid={colors.primaria}
                keyboardType="numeric"
                onChangeText={aux => {
                  aux = parseFloat(aux.replace(',', '.'))
                  this.setState({ valor_digitado: aux })
                }
                }

              />

            </View>

            <ButtonText
              outline
              color={colors.primaria}
              onPress={() => {
                if (this.state.valor_digitado > 0) {
                  var total = parseFloat(this.state.valor) + parseFloat(this.state.valor_digitado);
                  this.setState({ valor: total });
                  this.setState({ valor_digitado: 0 });
                  Alert.alert(
                    'Recarga efetuada?',
                    'Você acabou de recarregar seu cartão',
                    [
                      {
                        text: 'OK', onPress: () => {

                        }
                      },
                    ],
                    { cancelable: false }
                  )
                } else {
                  Alert.alert(
                    'Digite um valor para ser recarregado',
                    'Pode usar também os centavos',
                    [
                      {
                        text: 'OK', onPress: () => {

                        }
                      },
                    ],
                    { cancelable: false }
                  )
                }
              }}>
              SALVAR RECARGA
          </ButtonText>
          </View>

          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <Switch
              barHeight={26}
              circleSize={24}
              backgroundActive={colors.primaria}
              backgroundInactive={'#D0D0D0'}
              circleBorderWidth={0}
              onValueChange={(value) => this.setState({ meia: value })}
              value={this.state.meia}
              keyboardType={'numeric'}
            />
            <Text style={styles.subtitle}> Utilizar cobrança de meia passagem </Text>

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
  container_outro_valor: {
    margin: metrics.padding,
    backgroundColor: colors.cinza,
    borderRadius: 20,
    padding: metrics.padding,
  },
  vw_recarregar: {
    flexDirection: "row",
    padding: metrics.padding,
    margin: metrics.padding,
  },
  vw_valor: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.padding,
  },
  txt_ds: {
    fontSize: font.ds_label,
    fontFamily: 'System',
    margin: metrics.half_padding,
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
  txt_placeholder: {
    fontFamily: 'System',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: 15,
    padding: 5,
    borderWidth: 0,
    height: 55,
    borderRadius: 10.5,
    marginVertical: 5,
    width: 300,
    justifyContent: 'center',
    backgroundColor: colors.primaria,
    color: 'white'
  },
  icon: {
    fontSize: font.icon_list,
    padding: metrics.padding,
  },
});
