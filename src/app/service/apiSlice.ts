import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { opportunities, JobPostById, JobPosting } from '../../../type';

interface Job {
    job: opportunities;
}

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com' }),
  endpoints: (builder) => ({
    getJobs: builder.query<JobPosting, void>({
      query: () => 'opportunities/search',
    }),
    getJob: builder.query<JobPostById, string>({
      query: (id: string) => `opportunities/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobQuery } = jobsApi;
