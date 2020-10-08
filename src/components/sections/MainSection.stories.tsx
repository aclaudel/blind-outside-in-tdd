import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from "./MainSection";

export default {
  title: 'Main Section',
  component: MainSection,
};

export const DefaultState = () =>
  <MainSection
    items={[]}
    isLoading={false}
    fetchCallback={() => {}}/>;

export const LoadingData = () =>
  <MainSection
    items={[]}
    isLoading={true}
    fetchCallback={() => {}}/>;

export const DataReady = () =>
  <MainSection
    items={[{id: 1, name: 'Arnaud'}]}
    isLoading={false}
    fetchCallback={() => {}}/>;

