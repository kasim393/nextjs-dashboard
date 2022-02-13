export interface UserProps{
  users: Welcome[]
}

export interface Welcome {
  full_name:         string;
  dashboard_stats:   DashboardStats;
  upcoming_sessions: UpcomingSession[];
  job_postings:      JobPosting[];
}

export interface DashboardStats {
  profile_views:       number;
  mentorship_sessions: number;
  jobs_applied:        number;
  skills_verified:     number;
}

export interface JobPosting {
  role:              string;
  organization_name: string;
  location:          string;
  date_posted:       string;
}

export interface UpcomingSession {
  mentor_name:  string;
  timings:      string;
  date:         string;
  session_type: string;
}
