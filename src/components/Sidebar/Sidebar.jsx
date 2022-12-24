import React from 'react';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__inputs">
        <DatePicker
          placeholder="'nother day"
          radius="xs"
          size="md"
          icon={<IconCalendar size={26} />}
          onChange={props.handleDateChange}
          clearable={false}
        />
        <button value="selected" onClick={props.handleClick}>
          Selected
        </button>
        <button value="births" onClick={props.handleClick}>
          Births
        </button>
        <button value="deaths" onClick={props.handleClick}>
          Deaths
        </button>
        <button value="events" onClick={props.handleClick}>
          Events
        </button>
        <button value="holidays" onClick={props.handleClick}>
          Holidays
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
