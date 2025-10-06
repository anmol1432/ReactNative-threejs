import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ContactList = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: "JS Ninja",
      phone: "+91-9000000001",
      image: "https://picsum.photos/536/354",
    },
    {
      id: 2,
      name: "React Robot",
      phone: "+91-9000000002",
      image: "https://picsum.photos/536/354",
    },
    {
      id: 3,
      name: "Node Wizard",
      phone: "+91-9000000003",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "UI Kitty",
      phone: "+91-9000000004",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Code Panda",
      phone: "+91-9000000005",
      image: "https://picsum.photos/200/300",
    },
      {
      id: 53,
      name: "Code Panda",
      phone: "+91-9000000005",
      image: "https://picsum.photos/200/300",
    },
      {
      id: 51,
      name: "Code Panda",
      phone: "+91-9000000005",
      image: "https://picsum.photos/200/300",
    },
      {
      id: 25,
      name: "Code Panda",
      phone: "+91-9000000005",
      image: "https://picsum.photos/200/300",
    },
  ]);

  return (
    <View style={styles.contacts}>
      <Text style={styles.heading}>📞 My Contacts</Text>
      <ScrollView style={styles.container} scrollEnabled={true}  showsVerticalScrollIndicator={true} >
        {contacts.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity style={styles.contact}>
              <Image
                source={{ uri: item.image }}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
              <View style={{flex:1, flexDirection:'row', width:40, justifyContent:'flex-end', gap:10}}>
                <TouchableOpacity>
                    <Text style={{fontSize:20}}>☎️</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize:20}}>💬</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            {/* Separator except for last item */}
            {index !== contacts.length - 1 && (
              <View style={styles.separator}></View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  contacts: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    paddingVertical: 8,
    paddingHorizontal:8
    // height:200
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  phone: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: "#d7d2d2ff",
    marginHorizontal: 16,
  },
});
