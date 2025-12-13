import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { setupPlayer, addTracks, playBackService } from "../../../service/musicPlayer";
import TrackPlayer , { Event , Track, useTrackPlayerEvents, State, usePlaybackState } from "react-native-track-player";
import SongInfo from "../songInfo";
import SongSlider from '../songSlider';
import {playListData} from "../../../constants/playListData";


const {width, height} = Dimensions.get('window');

const ControlCenter = () => {

  const playbackState = usePlaybackState();
  const [track, setTrack] = useState<Track | undefined>(undefined);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrack(track);
    }
  });

  const skipToNext = async() => {
    await TrackPlayer.skipToNext();
  }

  const skipToPrevious = async() => {
    await TrackPlayer.skipToPrevious();
  }

  const togglePlayBack = async(playback:any) => {

    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playback.state == "paused" || playback.state == "ready") {
        await TrackPlayer.play();
      }
      else{
        await TrackPlayer.pause();
      }
    } else {
      // No current track, start playing the first one
      await TrackPlayer.skipToNext();
      await TrackPlayer.play();
    }
    console.log('Current Track:', currentTrack, playbackState);
  }


  useEffect(() => {
   console.log('Playback State Changed:', playbackState);
  }, [playbackState])
  

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <SongInfo track={track} />
      </View>
      <View style={styles.container}>
        <SongSlider />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.controlBtn} onPress={skipToPrevious}>
          <Text style={styles.btnText}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn} onPress={() => togglePlayBack(playbackState)}>
          <Text style={styles.btnText}>
            {playbackState.state !== 'paused' ? '⏸' : '▶️'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlBtn} onPress={skipToNext}>
          <Text style={styles.btnText}>⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ControlCenter;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  controlBtn: {
    backgroundColor: '#333',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 24,
  },
});