import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>Tap</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>me</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>to</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>scroll</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>more</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>...</Text>
        </View>
          <View style={styles.container}>
          <Text style={[styles.card, styles.ElevatedCard]}>more</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbf5f5ff',
    paddingHorizontal:8
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    textAlign: 'center',
    borderRadius: 8,
    marginHorizontal: 6,
  },
  ElevatedCard: {
    backgroundColor: '#f6f1f1ff',
    elevation: 8,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#fefefeff',
    shadowOpacity: 0.5,
    shadowRadius: 8,
  }
});

export default ElevatedCard