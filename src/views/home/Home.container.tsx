import React, { useState, useEffect } from 'react';
import { datesEndpoint } from '../../utils/constants';
import Home from './Home.component';

type ShipDates = {
  iphone: string;
  macbook: string;
  watch: string;
};

const HomeContainer = () => {
  const [loading, setState] = useState(true);
  const [dates, setDates] = useState<ShipDates | null>(null);

  // setTimeout for transition from Coming Products to Homepage
  useEffect(() => {
    const fetchDates = async () => {
      const resp = await fetch(datesEndpoint);
      const shippingDates = await resp.json();
      setDates(shippingDates);
    };
    const timeout = setTimeout(() => {
      setState(false);
    }, 3000);
    fetchDates();
    return () => clearTimeout(timeout);
  }, []);

  return <Home dates={dates} loading={loading} />;
};

export default HomeContainer;
