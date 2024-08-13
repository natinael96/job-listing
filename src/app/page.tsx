'use client';

import React from 'react';
import DashboardComponent from './components/DashboardComponent';
import { Provider } from 'react-redux';
import { store } from './service/store'; 
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { jobsApi } from './service/apiSlice';

export default function Home() {
  return (
    <Provider store={store}>
      
        <DashboardComponent />
      
    </Provider>
  );
}
