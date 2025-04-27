const Project = ({ title, link, description }) => {
    return (
      <div className="project">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default function Projects() {
    const projects = [
      {
        title: "Swansea Degree Classification Calculator",
        link: "https://yannki.github.io/swansea-degree-calculator/",
        description:
          "A Website for Swansea Undergraduate Students to Calculate their Degree Classification using simple HTML, CSS and JavaScript.",
      },
    ];
  
    return (
      <div className="section">
        <h2 id="projects">Projects</h2>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    );
  }