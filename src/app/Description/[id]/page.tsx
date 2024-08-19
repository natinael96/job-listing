'use client';

import { useEffect, useState } from 'react';
import { Job } from '../../api/jobs/jobs';
import Description from '../../components/DescComponent'
import { FaMapMarkerAlt, FaRegCheckCircle } from "react-icons/fa";

export default function JobDetail({ params }: { params: { id: string } }) {
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJob = async () => {
          try {
            const response = await fetch(`https://akil-backend.onrender.com/opportunities/${params.id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch job');
            }
            const data = await response.json();
            setJob(data.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching job:', error);
            setLoading(false);
          }
        };
    
        fetchJob();
      }, [params.id]);

        if (loading) {
            return <div>Loading...</div>
        }

        if (!job) {
            return <div>Item not found</div>
        }

        const style = "py-3 font-extrabold text-3xl text-black";

        return (
            <div className='flex w-screen gap-10 m-7 justify-between items-start'>
                <div className='w-5/6 flex flex-col gap-5 text-gray-600'>
                    <div className='flex flex-col justify-between'>
                        <h1 className={style}>Description</h1>
                        <p>{job.description}</p>
                    </div>
                    <div>
                        <h1 className={style}>Responsibilities</h1>
                        <ul>
                            {job.responsibilities.split('\n').map((item, index) => (
                                <li key={index} className='flex items-center gap-3 p-1'>
                                    <FaRegCheckCircle /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className={style}>Ideal Candidate</h1>
                        <ul className='list-disc ml-3'>
                            <li className='p-1'>{job.idealCandidate}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className={style}>When & Where</h1>
                        <p className='flex gap-3 items-center'>
                            <FaMapMarkerAlt className='text-blue-600 rounded-full p-1 border-2 h-[35px] w-[35px] shadow-sm' />
                            {job.whenAndWhere}
                        </p>
                    </div>
                </div>
                <div>
                    <Description datePosted={job.datePosted} deadline={job.deadline} startDate={job.startDate} endDate={job.endDate} categories={job.categories} requiredSkills={job.requiredSkills} location={job.location} />
                </div>
            </div>
        );
    }
