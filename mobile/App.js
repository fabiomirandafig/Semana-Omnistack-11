import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return (
    <Routes />
  );
}