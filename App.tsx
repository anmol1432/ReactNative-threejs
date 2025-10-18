// Basics understanding of native components and styling

import React, { JSX } from "react";
import {
  StyleSheet
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import PasswordGenerator from "./src/features/passwordGenerator/index";
import BackgroundChanger from "./src/features/bgChanger/BackgroundChanger";

const App = ():JSX.Element => {
  return(
    <SafeAreaView style={styles.container}>
     {/* <PasswordGenerator /> */}
     <BackgroundChanger />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283236ff',
  },
  text: {
    fontSize: 40,   // instead of 800 (800 is way too large)
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    height: 100,
    color: '#ffff',
  },
  });

  export {styles}
  export default App;