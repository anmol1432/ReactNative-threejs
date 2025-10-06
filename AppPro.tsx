// styleSheet component is given by react-native for styleing component

import React, { JSX } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Text, useColorScheme, ScrollView } from "react-native";
import FlatCard from "./src/components/atom/FlatCard";
import ElevatedCard from "./src/components/atom/ElevatedCard";
import FancyCrad from "./src/components/atom/FancyCrad";
import ActionCard from "./src/components/atom/ActionCard";
import ContactList from "./src/components/atom/ContanctList";


const AppPro = ():JSX.Element => {
  const isDarkMode = useColorScheme() ===  'dark' ;
  return (

      <SafeAreaProvider>
        <View style={styles.container}>
            <ScrollView>
              <FlatCard />
              <ElevatedCard />
              <FancyCrad />
              <ActionCard />
              <ContactList />
            </ScrollView>
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#393939ff',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ff9797ff',
  },
  darkText: {
    color: '#103613ff',
  }
});


export default AppPro;