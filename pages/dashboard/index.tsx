/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../navbar";
import styles from "../../styles/Dashboard.module.css";
import Image from "next/image";
import { Welcome } from "../../types";

const dashboard = ({ users }: Welcome[]) => {
  const full_name = users.full_name;
  const dashboard = users.dashboard_stats;
  const job = users.job_postings;
  const sessions = users.upcoming_sessions;
  const daysBetween = new Date().getDate();
  const handleAlert = () => {
    alert("A Button was Clicked");
  };

  return (
    <>
      <Navbar users={full_name} />

      <div className={styles.dashboard}>
        <div className={styles.left_sidebar}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar_item}>
              <img
                className={styles.sidebar_img}
                src="/home.png"
                alt="home"
                width="36px"
                height="36px"
              />
              <p>Home</p>
            </div>
            <div className={styles.sidebar_item}>
              <img
                className={styles.sidebar_img}
                src="/dashboard.png"
                alt="dashboard"
                width="36px"
                height="36px"
              />
              <p>Dashboard</p>
            </div>
            <div className={styles.sidebar_item}>
              <img
                src="/school.png"
                className={styles.sidebar_img}
                alt="school"
                width="36px"
                height="36px"
              />
              <p>Mentors</p>
            </div>
            <div className={styles.sidebar_item}>
              <img
                className={styles.sidebar_img}
                src="/business_center.png"
                alt="business_center"
                width="36px"
                height="36px"
              />
              <p>Jobs</p>
            </div>
          </div>
        </div>
        <div className={styles.mid_section}>
          <div className={styles.mid_top}>
            <div className={styles.mid_top_head}>
              <p>Overview</p>
              <p>Dashboard</p>
            </div>
            <div className={styles.mid_top_body}>
              <div className={styles.mid_top_body_card}>
                <p>Profile Views</p>
                <p>{dashboard.profile_views}</p>
              </div>
              <div className={styles.mid_top_body_card}>
                <p>Mentorship Sessions</p>
                <p>{dashboard.mentorship_sessions}</p>
              </div>

              <div className={styles.mid_top_body_card}>
                <p>Job Applied</p>
                <p>{dashboard.jobs_applied}</p>
              </div>
              <div className={styles.mid_top_body_card}>
                <p>Skills Verified</p>
                <p>{dashboard.skills_verified}</p>
              </div>
            </div>
          </div>
          <div className={styles.mid_bottom}>
            <div className={styles.mid_top_head}>
              <p>Upcoming Sessions</p>
              <p onClick={handleAlert}>View All</p>
            </div>
            <div className={styles.mid_bottom_body}>
              {sessions.map((s: any, i: any) => (
                <>
                  <div className={styles.mid_body_content} key={i}>
                    <img
                      className={styles.mid_body_profile_img}
                      src="/up1.png"
                      alt="dp"
                      width="51"
                      height="51"
                    />
                    <div className={styles.mid_bottom_body_info}>
                      <p className={styles.mid_bottom_body_name}>
                        {s.mentor_name}
                      </p>
                      <p className={styles.mid_bottom_body_role}>Flutter</p>
                    </div>
                    <div className={styles.mid_bottom_body_schedule}>
                      <p className={styles.mid_bottom_body_time}>{s.timings}</p>
                      <p className={styles.mid_bottom_body_date}>{s.date}</p>
                    </div>
                    {s.session_type == "Review" ? (
                      <div className={styles.mid_bottom_body_status_review}>
                        <p className={styles.mid_bottom_body_stats}>
                          {s.session_type}
                        </p>
                      </div>
                    ) : (
                      <div className={styles.mid_bottom_body_status_mentorship}>
                        <p className={styles.mid_bottom_body_stats}>
                          {s.session_type}
                        </p>
                      </div>
                    )}

                    <div className={styles.mid_bottom_body_arrow}>
                      <img
                        src="/arrow_right_alt.png"
                        alt="dp"
                        width="45"
                        height="45"
                        onClick={handleAlert}
                        className={styles.mid_bottom_body_arrow_img}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right_section}>
          <div className={styles.right_section_content}>
            <div className={styles.right_head}>
              <div className={styles.mid_top_head}>
                <p>Overview</p>
                <p onClick={handleAlert}>View All</p>
              </div>
            </div>
            <div className={styles.right_body}>
              {job.map((j: any, i: any) => (
                <>
                  <div className={styles.right_body_job_list}>
                    <img
                      src="/up2.png"
                      width="80px"
                      height="80px"
                      alt="job"
                      className={styles.right_job_profile_img}
                    />
                    <div className={styles.right_job_info}>
                      <p className={styles.right_job_title}>{j.role}</p>
                      <p className={styles.right_job_comp}>
                        {j.organization_name}
                      </p>
                      <p className={styles.right_job_location}>{j.location}</p>
                    </div>
                    <div className={styles.right_job_upload}>
                      {j.date_posted.split("/")[0] == daysBetween ? (
                        <p className={styles.right_job_update_today}>Today</p>
                      ) : (
                        <p className={styles.right_job_update}>
                          {daysBetween - j.date_posted.split("/")[0]} Days Ago
                        </p>
                      )}
                    </div>
                    <img
                      src="/arrow_right_alt.png"
                      width="45px"
                      height="45px"
                      alt="job"
                      className={styles.right_job_img}
                      onClick={handleAlert}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
