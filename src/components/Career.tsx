import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setAllTimeline } from "./utils/GsapScroll";
import "./styles/Career.css";

const Career = () => {
  useEffect(() => {
    setAllTimeline();
    return () => {
      ScrollTrigger.getById("career-timeline")?.kill();
    };
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Associate</h4>
                <h5>Squad Technology Pvt. Ltd.</h5>
              </div>
              <h3>2018–22</h3>
            </div>
            <p>
              Full-stack developer building scalable web applications using
              Node.js, React.js, and Next.js. Led development teams and managed
              project delivery timelines. Designed and integrated REST APIs with
              third-party services including payment gateways and messaging.
              Worked with MongoDB, MSSQL, and MySQL databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Tripstack · Pune</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Worked on airline-related projects including routing domains,
              ticketing systems, and inventory management. Gained experience in
              travel ecosystem development and backend integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech ICT</h4>
                <h5>Marwadi University · Rajkot</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Bachelor's Degree in Information &amp; Communication Technology.
              Strong foundation in software development, system design, and
              problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
