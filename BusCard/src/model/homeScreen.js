/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, AsyncStorage, StatusBar } from 'react-native';

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
            valor: 0,
            pago: 0,
            aux: 0,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('@SALDO').then((value) => {
            if (parseFloat(value)) {
                this.setState({ valor: parseFloat(value) });
            } else {
                this.setState({ valor: 0 });
            }
        });

        AsyncStorage.getItem('@PAGO').then((value) => {
            if (parseFloat(value)) {
                this.setState({ pago: parseFloat(value) });
            } else {
                this.setState({ pago: 0 });
            }
        });
    }

    refresh() {
        AsyncStorage.getItem('@SALDO').then((value) => {
            if (parseFloat(value)) {
                this.setState({ valor: parseFloat(value) });
            } else {
                this.setState({ valor: 0 });
            }
        });

        AsyncStorage.getItem('@PAGO').then((value) => {
            if (parseFloat(value)) {
                this.setState({ pago: parseFloat(value) });
            } else {
                this.setState({ pago: 0 });
            }
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor={colors.secundaria} />
                <Header
                > BusCard </Header>
                <ScrollView>

                    <View
                        style={styles.container_valor}>
                        <Text style={styles.txt_ds_valor}> Valor total no cartão </Text>
                        <Text style={styles.txt_valor}> R$ {parseFloat(this.state.valor).toFixed(2)} </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('valorScreen', {
                                    onGoBack: () => this.refresh(),
                                });
                            }}>
                            <Text style={styles.txt_ds_valor}> Clique para recarregar </Text>
                        </TouchableOpacity>
                    </View>


                    <Text style={styles.txt_ds_valor}> Usar passagem </Text>
                    <View style={styles.btn_default}>
                        <ButtonDefault
                            onPress={() => {
                                Alert.alert(
                                    'Voltar uma passagem?',
                                    'Você irá voltar o valor de uma passagem',
                                    [
                                        {
                                            text: 'Cancelar', onPress: () => {

                                            }, style: 'cancel'
                                        },
                                        {
                                            text: 'OK', onPress: () => {
                                                if (this.state.pago != 0) {
                                                    var total = (this.state.valor) + (this.state.pago);
                                                    this.setState({ valor: total });
                                                    AsyncStorage.setItem('@SALDO', JSON.stringify(this.state.valor));
                                                }
                                            }
                                        },
                                    ],
                                    { cancelable: false }
                                )
                            }
                            }
                        > Voltar </ButtonDefault>
                        <ButtonDefault
                            onPress={() => Alert.alert(
                                'Usar uma passagem?',
                                'Você irá gastar o valor de uma passagem',
                                [
                                    { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
                                    {
                                        text: 'OK', onPress: () => {
                                            if (this.state.valor != 0) {
                                                var total = (this.state.valor) - (this.state.pago);
                                                this.setState({ valor: total });
                                                AsyncStorage.setItem('@SALDO', JSON.stringify(this.state.valor));
                                            }
                                        }
                                    },
                                ],
                                { cancelable: false }
                            )
                            }
                        > Usar </ButtonDefault>
                    </View>

                    <View
                        style={styles.container_valor}>
                        <Text style={styles.txt_ds_valor}> Valor pago na passagem </Text>
                        <Text style={styles.txt_pago}> R$ {this.state.pago} </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('precosScreen', {
                                    onGoBack: () => this.refresh(),
                                });
                            }}
                        >
                            <Text style={styles.txt_ds_valor}> Clique para alterar o preço </Text>
                        </TouchableOpacity>
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
        color: colors.primaria,
    },
    txt_valor: {
        fontSize: 60,
        color: colors.primaria,
    },
    txt_pago: {
        fontSize: 60,
        color: colors.secundaria,
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
