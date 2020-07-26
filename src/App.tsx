import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCovers, setCover } from './features/Player/playerSlice';
import _ from 'lodash';
import Player from './features/Player/Player';

function App() {
  const covers = useSelector(selectCovers);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!_.isEmpty(covers)) {
      dispatch(setCover(covers[0]));
    }
  }, [covers, dispatch]);

  if (_.isEmpty(covers)) {
    return (
      <p>The album is empty.</p>
    );
  }

  return (
    <Player />
  );
}

export default App;
