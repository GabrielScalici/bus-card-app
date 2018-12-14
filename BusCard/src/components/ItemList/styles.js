import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        height: 100
    },
    titulo:{
        fontSize: font.header,
        fontFamily: 'System',
        color: colors.branco,
    }

});

export default styles;