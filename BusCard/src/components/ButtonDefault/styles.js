import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        height: 100,
        width: 150,
        borderRadius: 20,
        marginHorizontal: metrics.half_padding,
    },
    titulo:{
        fontSize: font.txt_button,
        fontFamily: 'System',
        color: colors.branco,
    }

});

export default styles;