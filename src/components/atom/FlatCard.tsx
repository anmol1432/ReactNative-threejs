import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from 'react'

export default function FlatCard() {
  return (
    <SafeAreaProvider>
      <View>
        <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>white</Text>
          </View>
           <View style={[styles.card, styles.cardTwo]}>
            <Text>blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text>red</Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbf5f5ff',
    paddingHorizontal:8
  },
  container: {
    flex:1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardOne: {
    backgroundColor: '#f87979ff',
  },
  cardTwo: {
    backgroundColor: '#79c5f8ff',
  },
  cardThree: {
    backgroundColor: '#f6f1f1ff',
  },
});