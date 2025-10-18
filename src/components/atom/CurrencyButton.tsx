import { StyleSheet, Text, View } from 'react-native'
import React, {PropsWithChildren} from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name: string;
    flag?: string;
}> 

const CurrencyButton = (props:CurrencyBtnProps) => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.currencyText}>{props.name}</Text>
      <Text style={styles.flagStyle}>{props.flag}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
    },
    flagStyle: {
        fontSize: 38,
        color: '#ffff',
        marginBottom: 5,
    },
    currencyText: {
        fontSize: 18,
        color: '#ffff',
        marginBottom: 5,
    }
})