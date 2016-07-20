/* eslint-disable no-unused-vars */
import React, {PropTypes} from 'react';

const Time = ({date, mode = 'short'}) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dateToFormat = new Date(date);

  const [weekday, month, day, year] = dateToFormat.toDateString().split(' ');
  const fullMonth = months[dateToFormat.getMonth()];

  let dateFormatted = '';

  if(mode === 'short') {
    dateFormatted = `${month} ${day}, ${year}`;
  }
  else {
    dateFormatted = `${fullMonth} ${day}, ${year}`;
  }

  return (
    <time dateTime={date}>{dateFormatted}</time>
  );
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
  mode: PropTypes.string
};

export default Time;
