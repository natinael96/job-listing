import Link from "next/link";
import CardComponent from "./components/CardComponent";
import job_postings from "./jobs.json";
import React from "react";
import DescComponent from "./components/DescComponent";

export default function Home() {
  const data = job_postings["job_postings"];

  return (
    <div className="w-4/5 py-24 pl-60 pr-96 flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#25324b]">Job Postings</h1>
          <span className="text-[#7C8493] text-base font-normal font-['Epilogue'] leading-relaxed">
            {data.length} job postings
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
      {data.map((dat, idx) => (
        <Link href={`/Description/${idx}`} key={idx}>
          <CardComponent fields={dat} index={idx} />
        </Link>
      ))}
    </div>
  );
}
