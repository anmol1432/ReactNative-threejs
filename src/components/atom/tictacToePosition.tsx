import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { JSX } from 'react'
import { ITictacToePosition } from '../../types/tictacToePosition'

const TictacToePosition = (props: ITictacToePosition): JSX.Element => {


    return (
        <TouchableOpacity onPress={props.clickPosition}>
            <View style={styles.container}>
                <Text style={styles.positionText}>{props.symbol ? props.symbol : '🐧'}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TictacToePosition

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#1e272eff',
        borderColor: '#485460ff',
        borderWidth: 3,
        borderRadius: 8,
        padding: 10,
        width: 90,
        height: 90,
        justifyContent: 'center',
    },
    positionText: {
        fontSize: 40,
        color: '#f2f5f3ff',
    }
})