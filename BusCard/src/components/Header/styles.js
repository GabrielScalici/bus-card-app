import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        height: 100,
        flexDirection: "row" 
    },
    container_back:{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: metrics.padding,
        height: 100,
        flexDirection: "row" 
    },
    titulo:{
        fontSize: font.header,
        fontFamily: 'System',
        color: colors.branco,
    }

});

export default styles;