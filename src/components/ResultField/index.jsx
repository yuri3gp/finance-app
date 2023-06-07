import React from 'react';
import { View } from 'react-native';
import { Result, LabelResult, Value } from './styles';

const ResultField = ({ label, value }) => {
  return (
    <Result>
      <LabelResult>{label}</LabelResult>
      <Value>{value}</Value>
    </Result>
  );
};

export default ResultField;
