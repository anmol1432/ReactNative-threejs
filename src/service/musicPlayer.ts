
import TrackPlayer, { State, Event, RepeatMode} from 'react-native-track-player';
import { playListData } from '../constants/playListData';

// const state = await TrackPlayer.getState();
// if (state === State.Playing) {
//     console.log('The player is playing');
// };

// let trackIndex = await TrackPlayer.getCurrentTrack();
// let trackObject = await TrackPlayer.getTrack(trackIndex);
// console.log(`Title: ${trackObject.title}`);

// const position = await TrackPlayer.getPosition();
// const duration = await TrackPlayer.getDuration();
// console.log(`${duration - position} seconds left.`);

/* Setting up the player
* 1. Setup the player
**/
export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.setupPlayer();
        isSetup = true;
    }
    catch (error) {
        await TrackPlayer.setupPlayer();
        isSetup = true;
        console.log('Error in setting up the player', error);
    }
    finally {
        return isSetup;
    }
}


/* Add the tracks to player
* 2. Add the tracks
**/
export async function addTracks() {
    try {}
    catch (error) {
        console.log('Error in adding tracks', error);
    }
    finally {
        await TrackPlayer.add(playListData);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    }
};

/* Add the tracks to player
* 2. Add the tracks
**/
export async function playBackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.play();
    });
}