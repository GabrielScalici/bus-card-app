/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Alert, TextInput, AsyncStorage } from 'react-native';
import { Switch } from 'react-native-switch';
import Icon from 'react-native-vector-icons/Ionicons';
import renderIf from 'render-if';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonText from '../components/ButtonText';
import ButtonDefault from '../components/ButtonDefault';



type Props = {};
export default class precosScreen extends Component<Props> {
  constructor(props) {
    super(props);

    //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
    this.state = {
      //valor: 0,
      valor_digitado: 0,
      meia: false,
      passagem: 0,
      pago: 0,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('@PASSAGEM').then((value) => {
      if (value) {
        this.setState({ passagem: parseFloat(value) });
      } else {
        this.setState({ passagem: 0 });
      }
    });
    AsyncStorage.getItem('@PAGO').then((value) => {
      if (value) {
        this.setState({ pago: parseFloat(value) });
      } else {
        this.setState({ pago: 0 });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Header
          back
          onPress={() => this.props.navigation.goBack(null).refresh()}
        > Preços </Header>
        <ScrollView>

          <View style={styles.vw_valor}>
            <Text style={styles.txt_ds}> Valor da passagem: </Text>
            <Text style={styles.txt_valor}> R$ {this.state.passagem} </Text>
          </View>

          <View style={styles.container_outro_valor}>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>

              <Icon style={styles.icon} color={colors.primaria} name={"ios-calculator"} />

              <TextInput
                placeholder="Digite o novo valor de passagem"
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
                  var total = parseFloat(this.state.valor_digitado);
                  this.setState({ passagem: total });
                  Alert.alert(
                    'Preço cadastrado!',
                    'O preço da passagem foi atualizado',
                    [
                      {
                        text: 'OK', onPress: () => {
                          try {
                            AsyncStorage.setItem('@PASSAGEM', JSON.stringify(this.state.passagem));
                            AsyncStorage.setItem('@PAGO', JSON.stringify(this.state.passagem));
                          } catch (error) {
                            console.log(error)
                          }
                        }
                      },
                    ],
                    { cancelable: false }
                  )
                } else {
                  Alert.alert(
                    'Digite o preço da passagem!',
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
              SALVAR PREÇO
          </ButtonText>
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
  container_zerar: {
    margin: metrics.padding,
    padding: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secundaria,
    height: 200,
    borderRadius: 20,
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
  txt_ds_zerar: {
    fontFamily: 'System',
    fontSize: 25,
    color: 'white',
  },
});
