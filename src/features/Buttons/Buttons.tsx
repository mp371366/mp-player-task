import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import repeatIcon from './repeatIcon.svg';
import playActive from './playActive.png';
import previousIcon from './previousIcon.svg';
import shuffleIcon from './shuffleIcon.svg';
import nextIcon from './nextIcon.svg';
import playInactive from './playInactive.png';
import {
  selectPlaying, selectRandomMode, selectLoopMode,
  setRandomMode, setPlaying, setLoopMode, selectCover,
  selectNextCover, selectPrevCover, setCover,
} from '../Player/playerSlice';
import './Buttons.css';
import _ from 'lodash';

const Buttons: React.FunctionComponent = () => {
  const playing = useSelector(selectPlaying);
  const randomMode = useSelector(selectRandomMode);
  const loopMode = useSelector(selectLoopMode);
  const cover = useSelector(selectCover);
  const nextCover = useSelector(selectNextCover);
  const prevCover = useSelector(selectPrevCover);
  const dispatch = useDispatch();

  if (_.some([cover, nextCover, prevCover], _.isUndefined)) {
    return null;
  }

  function next() {
    dispatch(setCover(nextCover));
  }

  function prev() {
    dispatch(setCover(prevCover));
  }

  return (
    <div className="Buttons">
      <button
        className={randomMode ? 'Buttons-active-button' : ''}
        onClick={() => dispatch(setRandomMode(!randomMode))}
      >
        <img src={shuffleIcon} alt="Random" width="13px" />
      </button>
      <button onClick={prev}>
        <img src={previousIcon} alt="Prev" width="15px" />
      </button>
      <button onClick={() => dispatch(setPlaying(!playing))} className="Buttons-play-button">
        <img
          src={playing ? playActive : playInactive}
          alt={playing ? "Stop" : "Play"}
          width={(playing ? 93 : 60) + 'px'}
        />
      </button>
      <button onClick={next}>
        <img src={nextIcon} alt="Next" width="15px" />
      </button>
      <button
        className={loopMode ? 'Buttons-active-button' : ''}
        onClick={() => dispatch(setLoopMode(!loopMode))}
      >
        <img src={repeatIcon} alt="Loop" width="13px" />
      </button>
    </div>
  );
}

export default Buttons;
