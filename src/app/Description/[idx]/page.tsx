"use client"
import { useParams, notFound } from 'next/navigation';
// import job_postings from '../../jobs.json'; // Adjust the path according to your structure
import DescComponent from '../../components/DescComponent';
import React from 'react';
import {store} from '../../service/store';
import { useGetJobQuery,useGetJobsQuery } from '@/app/service/apiSlice';
import { Provider } from 'react-redux';

interface idParamsType{
  params:{
    idx:string;
  }
}

export default function JobDescription({params}:idParamsType) {
  
  
  // console.log(params);
  

  return (
    
    <Provider store={store}>
      <DescComponent id= {params.idx} />
    </Provider>
      
    // </div>
  );
}
