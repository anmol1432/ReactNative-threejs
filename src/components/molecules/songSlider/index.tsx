import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider';
import React from 'react'
import { useProgress } from 'react-native-track-player';
import TrackPlayer from 'react-native-track-player';

const SongSlider = () => {
  const { position, duration } = useProgress();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Slider
        value={position}
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#ccc"
        onValueChange={(value) => TrackPlayer.seekTo(value)}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(position)}</Text>
        <Text style={styles.timeText}>{formatTime(duration - position)}</Text>
      </View>
    </View>
  );
};

export default SongSlider

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#1DB954',
    borderRadius: 10,
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  timeText: {
    fontSize: 14,
    color: '#fff',
  },
});