import React, { ElementType } from 'react';
import _ from 'lodash';

interface TimeProps {
  seconds: number;
  as?: ElementType;
}

function Time({ seconds, as = 'p' }: TimeProps) {
  const mins = _.floor(seconds / 60);
  const secs = seconds - mins * 60;

  return React.createElement(
    as,
    {},
    <>{mins}:{_.padStart(secs.toString(), 2, '0')}</>
  );
}

export default Time;
