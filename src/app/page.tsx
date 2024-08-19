"use client";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import JobList from "./components/DashboardComponent";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col items-center">
        <div className="w-full m-6 p-3 flex items-center font-serif justify-between">
          <div className="flex flex-col  text-sm font-light">
            <p className="font-extrabold text-3xl text-slate-700">
              Opportunities
            </p>
            <p>Showing {count} results</p>
          </div>
          <div className="flex ">
            <div className=" text-sm font-light">sort by :</div>
            <select>
              <option value="1">Most relevent</option>
            </select>
          </div>
        </div>
        <SessionProvider>
          <JobList setCount={setCount} />
        </SessionProvider>
      </div>
    </div>
  );
}
