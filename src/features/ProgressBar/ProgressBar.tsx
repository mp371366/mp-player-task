import React, { useEffect } from 'react';
import './ProgressBar.css';
import Time from '../Time/Time';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCover, selectTime, selectPlaying,
  setCover, selectNextCover, setTime
} from '../Player/playerSlice';

function ProgressBar() {
  const time = useSelector(selectTime);
  const cover = useSelector(selectCover);
  const playing = useSelector(selectPlaying);
  const nextCover = useSelector(selectNextCover);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!playing) {
      return;
    }

    if (time < 0) {
      dispatch(setCover(nextCover));
    } else {
      const timer = setTimeout(() => {
        dispatch(setTime(time - 50));
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [time, playing, dispatch, nextCover])

  if (cover === undefined) {
    return null;
  }

  const progress = (1 - time / 1000 / cover.time) * 100;
  const progressStyle: React.CSSProperties = {
    width: `${progress}%`,
  };

  return (
    <div className="ProgressBar">
      <Time seconds={_.floor(time / 1000)} />
      <div className="ProgressBar-progress">
        <hr className="ProgressBar-bar" style={progressStyle} />
        <hr className="ProgressBar-base" />
      </div >
      <Time seconds={cover.time} />
    </div>
  );
}

export default ProgressBar;
