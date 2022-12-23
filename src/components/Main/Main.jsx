import React, { useEffect, useState } from 'react';
import './Main.css';
import data from '../../../data/db.json';
import { IconDetails } from '@tabler/icons';

const Main = (props) => {
  const selected_events = [];
  const holidays = [];
  const births = [];
  const deaths = [];
  const events = [];

  for (let i = 0; i < 10; i++) {
    const event_details = data.selected;
    const event_title = event_details[i].pages[0].titles.normalized;
    const event_description = event_details[i].pages[0].extract;
    let event_image = '';
    if (event_details[i].pages[0].hasOwnProperty('thumbnail')) {
      event_image = event_details[i].pages[0].thumbnail.source;
    }
    selected_events.push({
      title: event_title,
      description: event_description,
      img_url: event_image,
    });
  }

  for (let i = 0; i < 10; i++) {
    const holiday_details = data.holidays;
    const holiday_title = holiday_details[i].text;
    const holiday_description = holiday_details[i].pages[0].extract;
    let holiday_image = '';
    if (holiday_details[i].pages[0].hasOwnProperty('thumbnail')) {
      holiday_image = holiday_details[i].pages[0].thumbnail.source;
    }
    holidays.push({
      title: holiday_title,
      description: holiday_description,
      img_url: holiday_image,
    });
  }

  for (let i = 0; i < 10; i++) {
    const birth_details = data.births;
    const birth_name = birth_details[i].pages[0].titles.normalized;
    const birth_year = birth_details.year;
    const birth_description = birth_details[i].pages[0].description;
    let birth_image = '';
    if (birth_details[i].pages[0].hasOwnProperty('thumbnail')) {
      birth_image = birth_details[i].pages[0].thumbnail.source;
    }
    births.push({
      title: birth_name,
      description: birth_description,
      birth_year: birth_year,
      img_url: birth_image,
    });
  }

  const mEvents = selected_events.slice(1).map((item) => {
    return (
      <div className="sub__content">
        <h1 className="sub__title">{item.title}</h1>
        <p className="sub__description">{item.description}</p>
      </div>
    );
  });

  const mHolidays = holidays.map((item) => {
    return (
      <div className="sidebar__content">
        <h1 className="sidebar__title">{item.title}</h1>
        {item.img_url && <img className="sidebar__image" src={item.img_url} />}
        <p className="sidebar__description">{item.description}</p>
      </div>
    );
  });

  const mBirths = births.map((item) => {
    return (
      <div className="birth__content">
        <h1 className="birth__title">{item.title}</h1>
        {item.img_url && <img className="birth__image" src={item.img_url} />}
        <p className="birth__description">{item.description}</p>
      </div>
    );
  });

  return (
    <main>
      <div className="main__container">
        <div className="main__content">
          <div className="main__content__one">
            <div className="main_content_details">
              <h1 className="main__title">{selected_events[0].title}</h1>
              {selected_events[0].img_url && (
                <img className="main__image" src={selected_events[0].img_url} />
              )}
              <p className="main__description">
                {selected_events[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="sub__container">{mEvents}</div>
        <div className="births__container">{mBirths}</div>
      </div>
      <div className="sidebar__container">{mHolidays}</div>
    </main>
  );
};

export default Main;
