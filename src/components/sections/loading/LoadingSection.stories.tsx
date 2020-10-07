import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSection from "./LoadingSection";

export default {
  title: 'Loading Section',
  component: LoadingSection,
};

export const LoadingSpinner = () =>
  <LoadingSection />;

export const FancyLoadingSpinner = () =>
  <LoadingSection isFancy={true}/>;
