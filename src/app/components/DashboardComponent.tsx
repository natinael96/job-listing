import Link from "next/link";
import CardComponent from "./CardComponent";
import React from "react";
import { useSession } from "next-auth/react";
import { useGetJobsQuery } from "../service/apiSlice";
import { opportunities } from "../../../type";
import { Provider } from "react-redux";
import { store } from "../service/store";


function DashboardComponent() {
    // const data = job_postings["job_postings"];
    const { data: session, status } = useSession();
    const { data, error, isLoading } = useGetJobsQuery();

    if (isLoading) {
        return( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
          <p className="mt-4 text-lg text-gray-700">Loading...</p>;
      </div>
      )
    }

    if (!session) {
      return (
          <div className="flex flex-col items-center justify-center bg-gray-100">
              <p className="text-sm text-gray-700">You need to be logged in to view job postings</p>
          </div>
      );
  }

    if (!data) {
        return <div>No job postings available</div>;
    }
    console.log(data);

  return (
    <div className="w-4/5 py-24 pl-60 pr-96 flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#25324b]">Job Postings</h1>
          <span className="text-[#7C8493] text-base font-normal font-['Epilogue'] leading-relaxed">
            {data.data.length} job postings
          </span>
        </div>
        
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            className="px-2 py-1"
          >
            <option value="most-relevant">Most Relevant</option>
            <option value="most-recent">Most Recent</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      
        {data.data.map((dat, idx) => (
          
            <Link href={`/Description/${dat.id}`} key={dat.id}>
              <CardComponent id={idx}/>
            </Link>
            
          ))}
        
    </div>
  );

}

export default DashboardComponent