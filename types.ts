export interface UserDetails {
  about: string | null;
  email: string | null;
  first_name: string | null;
  id: string;
  industry: string | null;
  last_name: string | null;
  linkedin: string | null;
  location: string | null;
  phone_number: number | null;
  website: string | null;
}

export interface Project{
  id: string;
  user_id: string;
  title: string;
  description: string
  applicants: string[] | null
}

export interface Applicant{
  id: string;
  name: string;
  email: string;
  phone_number: number;
  linkedin: string
}
