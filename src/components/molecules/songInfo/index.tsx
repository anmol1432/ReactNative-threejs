import { StyleSheet, Text, View, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'


interface ISongInfo extends PropsWithChildren {
    track: Track | null | undefined;

}

const SongInfo = ({track}:ISongInfo) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: track?.artwork }} style={styles.artwork} />
      <Text style={styles.title}>{track?.title || 'Unknown Title'}</Text>
      <Text style={styles.artist}>{track?.artist || 'Unknown Artist'} • {track?.album || 'Unknown Album'}</Text>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  artwork: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#333', // placeholder if image fails
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  artist: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
});