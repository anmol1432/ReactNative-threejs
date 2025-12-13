// Basics understanding of native components and styling

import React, { JSX } from "react";
import {
  StyleSheet
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import PasswordGenerator from "./src/features/passwordGenerator/index";
import BackgroundChanger from "./src/features/bgChanger";
import DiceRolling from "./src/features/diceRolling";
import CurrencyConvertor from "./src/features/currencyConvertor";
import TicTacToe from "./src/features/tictacToe";
import MusicPlayer from "./src/features/musicPlayer";
import { playBackService } from "./src/service/musicPlayer";
import TrackPlayer from 'react-native-track-player';

const App = ():JSX.Element => {
  return(
    <SafeAreaView style={styles.container}>
     {/* <PasswordGenerator /> */}
     {/* <BackgroundChanger /> */}
     {/* <DiceRolling /> */}
     {/* <CurrencyConvertor /> */}
     {/* <TicTacToe /> */}
     <MusicPlayer />
    </SafeAreaView>
  );
}

TrackPlayer.registerPlaybackService(() => playBackService);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  text: {
    fontSize: 40,   // instead of 800 (800 is way too large)
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    height: 100,
    // color: '#ffff',
  },
  });

  export {styles}
  export default App;