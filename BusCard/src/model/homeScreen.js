/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, AsyncStorage, StatusBar, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { withNavigationFocus } from "react-navigation";

//MEDIDAS
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
            data: '',
            data_usado: '',
            data_voltar: '',
        };
    }

    componentDidMount() {
        const { navigation } = this.props;

        this.focusListener = navigation.addListener("didFocus", () => {
            this.forceUpdate();
        });

        //DATA
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        let date = day + '/' + month + '/' + year + ' às ' + hours + ':' + min;
        this.setState({ data: date });


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

        AsyncStorage.getItem('@DATA_USADO').then((value) => {
            this.setState({ data_usado: value });
        });

        AsyncStorage.getItem('@DATA_VOLTAR').then((value) => {
            this.setState({ data_voltar: value });
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

        AsyncStorage.getItem('@DATA_USADO').then((value) => {
            this.setState({ data_usado: value });
        });

        AsyncStorage.getItem('@DATA_VOLTAR').then((value) => {
            this.setState({ data_voltar: value });
        });
    }


    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <StatusBar backgroundColor={colors.secundaria} />
                    <ScrollView>
                        <Header
                        > BusCard </Header>

                        <Animatable.View animation="fadeInDownBig" interationCount={1}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('valorScreen', {
                                        onGoBack: () => this.refresh(),
                                    });
                                }}>
                                <View
                                    style={styles.container_valor}>
                                    <Text style={styles.txt_ds_valor}> Valor total no cartão </Text>
                                    <Text style={styles.txt_valor}> R$ {parseFloat(this.state.valor).toFixed(2)} </Text>
                                    <Text style={styles.txt_ds_valor}> Clique para recarregar </Text>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>


                        <View style={styles.container_btns}>
                            <Text style={styles.txt_ds_valor}> Usar passagem </Text>
                            <View style={styles.btn_default}>
                                <Animatable.View animation="fadeInLeftBig" interationCount={1}>
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
                                                                AsyncStorage.setItem('@DATA_VOLTAR', this.state.data);
                                                                this.setState({ data_voltar: this.state.data })
                                                            }
                                                        }
                                                    },
                                                ],
                                                { cancelable: false }
                                            )
                                        }
                                        }
                                    > Voltar </ButtonDefault>
                                </Animatable.View>
                                <Animatable.View animation="fadeInRightBig" interationCount={1} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                                                            AsyncStorage.setItem('@DATA_USADO', this.state.data);
                                                            this.setState({ data_usado: this.state.data })
                                                        }
                                                    }
                                                },
                                            ],
                                            { cancelable: false }
                                        )
                                        }
                                    > Usar </ButtonDefault>
                                </Animatable.View>
                            </View>
                        </View>
                        <Animatable.View animation="fadeInUpBig" interationCount={1}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('precosScreen', {
                                        onGoBack: () => this.refresh(),
                                    });
                                }}
                            >
                                <View
                                    style={styles.container_valor}>
                                    <Text style={styles.txt_ds_valor}> Valor pago na passagem </Text>
                                    <Text style={styles.txt_pago}> R$ {this.state.pago} </Text>
                                    <Text style={styles.txt_ds_valor}> Clique para alterar o preço </Text>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>

                        <Animatable.View animation="fadeInUpBig" interationCount={1} style={styles.container_history}>
                            <Text style={styles.title}> Histórico </Text>

                            <Text style={styles.txt_ds_valor}> Última passagem utilizada em: </Text>
                            <Text style={styles.txt_ds_valor}> {this.state.data_usado} </Text>

                            <Text style={styles.txt_ds_valor}> Última passagem retornada em: </Text>
                            <Text style={styles.txt_ds_valor}> {this.state.data_voltar} </Text>

                        </Animatable.View>

                    </ScrollView>
                </View>
            </SafeAreaView>
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
    container_btns: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.padding
    },
    container_history: {
        padding: metrics.padding,

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
    title: {
        fontSize: font.title,
        fontFamily: 'System',
        color: colors.primaria,
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.secundaria
    },

});
