"use client";
import React, { useEffect, useState } from "react";
import { Job } from "../api/jobs/jobs";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface JobCardProps {
  job: Job;
  accessToken: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, accessToken }) => {
  const [bookmarked, setBookmarked] = useState(job.isBookmarked);

  useEffect(() => {
    setBookmarked(job.isBookmarked);
  }, [job]);

  const handleAddBookmark = async () => {
    const res = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${job.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (res.ok) {
      setBookmarked(true);
    }
  };

  const handleDeleteBookmark = async () => {
    const res = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${job.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (res.ok) {
      setBookmarked(false);
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link
        href={`/Description/${job.id}`}
        className="flex p-6"
        data-testid="job-link"
      >
        <div className="flex-shrink-0">
          <Image 
            src={job.logoUrl || "https://via.placeholder.com/80"}
            alt="Company Logo"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-300"
          />
        </div>

        <div className="flex flex-col ml-4 w-full">
          <h2 className="text-xl font-semibold mb-2" data-testid="job-title">
            {job.title}
          </h2>
          <div className="flex items-center gap-3 text-sm font-light mb-2">
            <p className="text-gray-600" data-testid="job-org">
              {job.orgName}
            </p>
            <p className="text-gray-600" data-testid="job-location">
              {job.location[0]}
            </p>
          </div>
          <p className="text-gray-700 mb-4" data-testid="job-description">
            {job.description}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="bg-[#56cdad] text-white px-4 py-1 rounded-full text-sm">
              {job.opType}
            </button>
            <span className="text-gray-400">|</span>
            {job.categories.map((data, index) => (
              <button
                key={index}
                className="bg-orange-100 border border-orange-300 py-1 px-2 rounded-full text-orange-600 text-sm"
              >
                {data}
              </button>
            ))}
          </div>
        </div>
      </Link>
      {accessToken && (
        <div className="absolute top-4 right-4">
          {!bookmarked ? (
            <FaRegBookmark
              className="text-2xl cursor-pointer transition-colors hover:text-yellow-400"
              onClick={handleAddBookmark}
              data-testid="bookmark-icon"
            />
          ) : (
            <FaBookmark
              className="text-2xl text-yellow-400 cursor-pointer transition-colors hover:text-yellow-500"
              onClick={handleDeleteBookmark}
              data-testid="bookmarked-icon"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default JobCard;
