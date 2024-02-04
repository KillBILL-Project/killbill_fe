import React from 'react';
import { ActivityIndicator } from './Spinner.style';
import { PRIMARY } from '../../constants/colors';

const Spinner = () => {
  return <ActivityIndicator size="large" color={PRIMARY} />;
};

export default Spinner;
