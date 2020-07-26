import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import _ from 'lodash';

export interface Cover {
  id: number,
  author: string,
  title: string,
  image: string,
  time: number,
}

interface PlayerState {
  album: string;
  covers: Cover[];
  cover?: Cover,
  nextCover?: Cover,
  prevCover?: Cover,
  time: number,
  playing: boolean,
  randomMode: boolean,
  loopMode: boolean,
}

const initialState: PlayerState = {
  album: 'Unreleased',
  covers: [
    {
      id: 0,
      author: 'Kanye West',
      title: 'Self Conscious',
      image: '/images/unreleasedCover.png',
      time: 320,
    },
    {
      id: 1,
      author: 'Steel panther',
      title: 'Feel the steel',
      image: '/images/cover1.png',
      time: 235,
    },
    {
      id: 2,
      author: 'Kanye West',
      title: 'Woemn',
      image: '/images/cover2.png',
      time: 220,
    },
    {
      id: 5,
      author: 'Steel panther',
      title: 'Feel the steel2222',
      image: '/images/cover1.png',
      time: 222,
    },
    {
      id: 6,
      author: 'Kanye West',
      title: 'Women3333',
      image: '/images/cover2.png',
      time: 333,
    },
  ],
  time: 0,
  playing: false,
  randomMode: false,
  loopMode: false,
};

function setOtherCovers(state: PlayerState) {
  const cover = state.cover;
  const size = _.size(state.covers);

  if (size <= 1 || state.loopMode) {
    state.nextCover = state.prevCover = cover;
  } else if (state.randomMode) {
    const randomIdx = _.random(size - 2);
    const otherCovers = _.differenceBy(state.covers, [cover], 'id');
    state.nextCover = state.prevCover = _.nth(otherCovers, randomIdx);
  } else if (cover) {
    const idx = _.findIndex(state.covers, ['id', cover.id]);
    state.nextCover = _.nth(state.covers, (idx + 1) % size);
    state.prevCover = _.nth(state.covers, idx - 1);
  }
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCover: (state, action: PayloadAction<Cover | undefined>) => {
      state.cover = action.payload;
      state.time = 1000 * (state.cover?.time ?? 0);
      setOtherCovers(state);
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
    setRandomMode: (state, action: PayloadAction<boolean>) => {
      state.randomMode = action.payload;
      setOtherCovers(state);
    },
    setLoopMode: (state, action: PayloadAction<boolean>) => {
      state.loopMode = action.payload;
      setOtherCovers(state);
    },
  },
});

export default playerSlice.reducer;

export const { setCover, setTime, setPlaying,
  setRandomMode, setLoopMode } = playerSlice.actions;

export const selectAlbumName = (state: RootState) => state.player.album;
export const selectCover = (state: RootState) => state.player.cover;
export const selectNextCover = (state: RootState) => state.player.nextCover;
export const selectPrevCover = (state: RootState) => state.player.prevCover;
export const selectCovers = (state: RootState) => state.player.covers;
export const selectTime = (state: RootState) => state.player.time;
export const selectPlaying = (state: RootState) => state.player.playing;
export const selectRandomMode = (state: RootState) => state.player.randomMode;
export const selectLoopMode = (state: RootState) => state.player.loopMode;
