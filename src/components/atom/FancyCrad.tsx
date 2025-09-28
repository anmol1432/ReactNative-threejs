import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCrad = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image style={[styles.cardImage]} source={{
            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }}/>
        <View style={styles.cardBody}>
          <Text style={[styles.cardTitle]}>Beautiful Scenery</Text>
          <Text style={[styles.cardDescription]}>
            Location: Switzerland the land of mountains and lakes.
            condolas are also available here.
            free wifi is also available here.
          </Text>
          <Text style={[styles.cardDescription]}>
            Price: $1000
          </Text>
            <Text style={[styles.cardDescription]}>
            Rating: 4.5/5
          </Text>
        </View>
      </View>
    </View>
  )
}

// 'marginVertical' applies margin to both the top and bottom of the component.
// If you use 'margin', it applies margin to all sides (top, right, bottom, left).
// If you use 'marginLeft', it only applies to the left side.
// 'marginVertical' is useful when you want spacing above and below the card.

const styles = StyleSheet.create({
    headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbf5f5ff',
    paddingHorizontal:8
  },
  card: {
    width: '100%',
    height: 350,
    borderRadius: 6,
    marginVertical: 12, // marginVertical applies margin to top and bottom
  },
  elevatedCard: {
    backgroundColor: '#f6f1f1ff',
    elevation: 8,
    shadowOffset: { width: 1, height: 1 },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    padding: 8,
  },
  cardTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#103613ff',
    marginBottom: 4,
  },
  cardDescription:{
    fontSize: 16,
    color: '#103613ff', 
    marginBottom: 4,
  },
});

export default FancyCrad