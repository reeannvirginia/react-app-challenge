import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { datesEndpoint } from '../../utils/constants';
import Home from './Home.component';

type ShipDates = {
  iphone: string;
  macbook: string;
  watch: string;
};

const HomeContainer = () => {
  const { pathname } = useLocation();
  const [loading, setState] = useState(pathname === '/home');
  const [dates, setDates] = useState<ShipDates | null>(null);

  useEffect(() => {
    const fetchDates = async () => {
      const resp = await fetch(datesEndpoint);
      const shippingDates = await resp.json();
      setDates(shippingDates);
    };
    fetchDates();
    setTimeout(() => {
      setState(false);
    }, 3000);
  }, []);

  return <Home dates={dates} loading={loading} />;
};

export default HomeContainer;
