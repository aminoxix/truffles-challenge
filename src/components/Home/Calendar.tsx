import React from 'react';

import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

export default function Calendar()
{
  const [ selected, setSelected ] = React.useState<Date>();

  return (
    <DayPicker
      className="flex justify-center"
      mode="single"
      selected={ selected }
      onSelect={ setSelected }
    />
  );
}