import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ContentCard from '../ContentCard/ContentCard';
import { getURL } from '../../api/apis';
import { Loader } from '@mantine/core';
import './Content.css';
const Content = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [date, setDate] = useState(new Date());
  const [endpoint, setEndpoint] = useState('selected');

  async function fetchData(date, endpoint) {
    const url = getURL(date, endpoint);
    const response = await fetch(url);
    const data = await response.json();
    setLoaded(true);
    setData(Object.values(data)[0]);
  }

  useEffect(() => {
    fetchData(date, endpoint);
    console.log(data);
    console.log(loaded);
  }, [date, endpoint]);

  function handleClick(event) {
    setLoaded(false);
    setEndpoint(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event);
    console.log(event);
  }

  function getElements() {
    if (data) {
      return data.map((item) => (
        <ContentCard
          key={item.pages[0].pageid}
          title={item.text}
          description={item.pages[0].extract}
        />
      ));
    }
  }

  function renderCards() {
    if (loaded) {
      return <div className="content__container">{getElements()}</div>;
    } else {
      return (
        <div className="content__container">
          <Loader color="dark" size="xl" variant="dots" />
        </div>
      );
    }
  }

  return (
    <main>
      <div className="main__container">
        {renderCards()}
        <Sidebar
          handleClick={(e) => handleClick(e)}
          handleDateChange={(e) => handleDateChange(e)}
        />
      </div>
    </main>
  );
};

export default Content;
