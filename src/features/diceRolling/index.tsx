import {Text, View, Image, Button, TouchableOpacity, Vibration } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/diceRolling'


const DiceRolling = () => {
    const [LogoPosition, setLogoPosition] = useState({ top: -235, left: -20 });
    
    const rollDice = () => {
        const random = Math.floor(Math.random() * 6);
        switch (random) {
            case 0:
                setLogoPosition({ top: -235, left: -20 });
                break;
            case 1:
                setLogoPosition({ top: -235, left: -490});
                break;
            case 2:
                setLogoPosition({ top: -235, left: -405 });
                break;
            case 3:
                setLogoPosition({ top: -235, left: -300 });
                break;
            case 4:
                 setLogoPosition({ top: -235, left: -200})
                break;
            case 5:
                setLogoPosition({ top: -235, left: -110 });
                break;
        }
        Vibration.vibrate(1 * 300)
    }

  return (
    <View>
      <View style={styles.container}>
        <Image
            style={{...styles.tinyLogo, ...LogoPosition}}
            source={require("../../assets/dice.jpg")}
        />
      </View>
        <TouchableOpacity
            style={styles.btn}
            onPress={rollDice}>
        <Text style={styles.btnText}>Roll Dice</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DiceRolling;