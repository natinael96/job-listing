"use client"
import { useParams, notFound } from 'next/navigation';
import job_postings from '../../jobs.json'; // Adjust the path according to your structure
import DescComponent from '../../components/DescComponent';
import React from 'react';


export default function JobDescription() {

  const params = useParams();
  const idx = parseInt(params.idx as string, 10);
  // console.log(params);
  const job = job_postings["job_postings"][idx]
  // console.log(job);

  // if (!job) {
  //   notFound();
  // }

  return (
    <div className="py-24 pl-60 pr-96">
      <h1 className="text-3xl font-black text-[#25324b]">{job?.title}</h1>
      <DescComponent fields={job} />
    </div>
  );
}
