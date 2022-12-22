import React, { useState } from 'react';
import { IconCalendar } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';

const DateInput = (props) => {
  return (
    <DatePicker
      clearable={false}
      icon={<IconCalendar size={20} />}
      label="Pick another date"
      placeholder="Pick date"
      value={props.dateValue}
      onChange={props.handleDateChange}
    />
  );
};

export default DateInput;
