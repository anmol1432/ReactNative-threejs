import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { playListData } from '@src/constants/playListData';
import TrackPlayer , { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import { setupPlayer, addTracks, playBackService } from '../../service/musicPlayer';
import styles from '../styles/musicPlayer'
import ControlCenter from '../../components/molecules/controlCenter';


const {width, height} = Dimensions.get('window');

const MusicPlayer = () => {
  const [playerReady, setPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTracks();
    }

    setPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, [])
  
  if (!playerReady) {
    return (
      <View>
       <Text>Loading Music Player...</Text>
      </View>
    )
  }

  return (
    <View>
      <ControlCenter />
    </View>
  )
}

export default MusicPlayer