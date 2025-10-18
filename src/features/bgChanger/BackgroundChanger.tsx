import { Text, View, StatusBar, TouchableOpacity, Vibration } from 'react-native'
import styles from '../styles/backgroundChanger'
import React, { useState } from 'react'

const BackgroundChanger = () => {
    const [randomBackground, setRandomBackground] = useState('');
    const generateRandomColor = () => {
        const hexRange = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
          color += hexRange[Math.floor(Math.random() * 16)];
        }

        setRandomBackground(color);
        Vibration.vibrate(100);
    }
  return (
      <>
      <StatusBar backgroundColor="#97ee9bff" />
        <View style={{...styles.triangle, borderTopColor: randomBackground}}/>
        <View style={{...styles.circle, backgroundColor: randomBackground}}/>
          <View>
              <Text style={styles.title}>BackgroundChanger </Text>
          </View>
           <View>
              <TouchableOpacity style={{...styles.btn, backgroundColor:randomBackground}} onPress={()=>{
                 generateRandomColor()
              }}>
                  <Text style={styles.btnText}>Change Background</Text>
              </TouchableOpacity>
          </View>
      </>
  )
}

export default BackgroundChanger
