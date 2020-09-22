import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function moeda(props) {
    return(
        <View style={styles.moedaContainer}>
          <Text style={styles.MoedaTitle}>{props.name}:</Text>
          <Text style={styles.MoedaNumber}>R${props.high}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    moedaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    MoedaTitle: {
      fontWeight: 'bold',
      fontSize: 16
    },
    MoedaNumber: {
      marginLeft: 10,
      fontSize: 16
    }
})