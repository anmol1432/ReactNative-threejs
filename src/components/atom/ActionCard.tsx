import { StyleSheet, Text, View, Linking,  Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
   
    const openUrl = (url:string):Promise<any> => {
        console.log("ActionCard");
        Linking.openURL(url);
        return Promise.resolve(true);
    }

return (
    <View style={styles.container}>
      <Text style={styles.headingText}>🔥 Action Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What’s up guys! Something new dropped in JavaScript 👨‍💻  
            Take a look and leave a sexy comment.
          </Text>
        </View>

        {/* Image */}
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
          }}
          resizeMode="cover"
        />

        {/* Body */}
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            React Native combines the best parts of native development with
            React, a best-in-class JavaScript library for building user
            interfaces. Build beautiful apps that run everywhere!
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.readMoreBtn}
            onPress={() => openUrl("https://reactnative.dev/")}
          >
            <Text style={styles.readMoreText}>Read More →</Text>
          </TouchableOpacity>
        <TouchableOpacity
            style={styles.followMoreBtn}
            onPress={() => openUrl("https://reactnative.dev/")}
          >
            <Text  style={styles.followMoreText}>Follow more ❤️</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

export default ActionCard

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    color: "#f7f0f0ff",
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    marginVertical: 8,
    overflow: "hidden",
  },
  elevatedCard: {
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  headingContainer: {
    padding: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    lineHeight: 22,
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  bodyContainer: {
    padding: 12,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },
  footerContainer: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "flex-end",
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    gap:10
  },
  readMoreBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  readMoreText: {
    color: "#fff",
    fontWeight: "600",
  },
    
  followMoreBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#ff7676ff",
    borderRadius: 8,
  },
  followMoreText:{
    color: "#fff",
    fontWeight: "600",
  }
});