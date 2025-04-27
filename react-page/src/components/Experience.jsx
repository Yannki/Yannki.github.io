const JobExperience = ({ title, company, duration, responsibilities }) => {
    return (
      <div className="job-experience">
        <h3>{title}</h3>
        <h5>{company}, {duration}</h5>
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default function Experience() {
    const experiences = [
      {
        title: "System Analyst and Developer",
        company: "Birkbeck",
        duration: "Jul 2023 - Jan 2025",
        responsibilities: [
          "Developed and maintained core systems using Oracle APEX, PL/SQL, HTML, CSS, JavaScript, and REST API improving development efficiency by 20% through in-house applications like a backup tool and a centralized change management form.",
          "2nd and 3rd-line support, troubleshooting issues, resolving data inconsistencies, and enhancing system functionality, while documenting processes for future use.",
          "Assisted in automating business processes, optimizing user interfaces, and creating detailed documentation for systems supporting teaching, events, and corporate operations."
        ]
      },
      {
        title: "Software Engineer",
        company: "Wiley Edge (placed at NatWest Markets)",
        duration: "May 2022 - Mar 2023",
        responsibilities: [
          "6 weeks Java Development training covering main 3 topics: Java (Spring, Maven), SQL and Financial Foundations.",
          "Worked in a placement role with a backtesting team, where I developed skills in market data analysis and report creation.",
          "Responsible for cleaning and maintaining the codebase and database using SQL, JAVA, and Bash."
        ]
      },
      {
        title: "Teaching Assistant",
        company: "Swansea University",
        duration: "Sep 2021 - Jun 2022",
        responsibilities: [
          "Provided support to students as they used software and worked to clarify subject material to promote their learning.",
          "By answering their questions and assisting with students' understanding of the material, I was able to deepen my own knowledge of the university modules I was taking.",
          "This role required strong communication skills and the ability to effectively explain complex concepts."
        ]
      },
      {
        title: "Intern",
        company: "Redmill Solutions",
        duration: "Jul 2021 - Sep 2021",
        responsibilities: [
          "Created data sources under supervision and ensured the data were in the correct format through using the company's system.",
          "Assisted in setting up phone lines, sorting out the server room, and developing HTML and VBA code."
        ]
      }
    ];
  
    return (
      <div className="section">
        <h2 id="experience">Experience</h2>
        {experiences.map((job, index) => (
          <JobExperience
            key={index}
            title={job.title}
            company={job.company}
            duration={job.duration}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    );
  }