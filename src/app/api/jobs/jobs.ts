import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any; 
  perksAndBenefits: any; 
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'lib', 'jobs.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const jobs: Job[] = JSON.parse(fileContents).job_postings;
    return NextResponse.json({ jobs: jobs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load jobs data' }, { status: 500 });
  }
}
