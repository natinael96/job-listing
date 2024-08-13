export interface opportunities {
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string; // ISO 8601 date string 
    endDate: string;   // ISO 8601 date string
    deadline: string;  // ISO 8601 date string
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string; // ISO 8601 date string
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: string | null;
    perksAndBenefits: string | null;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    orgPrimaryPhone: string;
    orgEmail: string;
    average_rating: number;
    total_reviews: number;
  }
  
  export interface JobPosting {
    success: boolean;
    message: string;
    data: opportunities[];
    errors: string[];
    count: number;
  }
  
  export interface JobPostById {
    success: boolean;
    message: string;
    data: opportunities;
    errors: string[];
    count: number;
  }