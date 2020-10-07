import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuerySection from "./QuerySection";

export default {
  title: 'Query Section',
  component: QuerySection,
};

export const FetchButton = () =>
  <QuerySection fetchCallback={() => console.log('clicked !')}/>;
